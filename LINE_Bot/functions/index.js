const messages = require('./messages');

const axios = require('axios');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


let FieldValue = admin.firestore.FieldValue;

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${functions.config().line.key}`;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const startKeyWord = "ประเมิน";
const rootPuiNode = "q010";
const puiList = messages.puiList;
const followups = messages.followups;

// will return next step with data, if no answer matched return current to ask user again
const puiMap = (step, answer, docData) => {
	console.log(`[pui-map] ${step}, ${answer}`)
	let result = {
		current_pui_step: step,
		latest_msg: answer,
		latest_msg_for: step,
		updated_at: FieldValue.serverTimestamp(),
	};

	// @TODO: handle no step found in puiList

	// matched!
	let currentAction = puiList[step]
	.filter(message => message.template && ['confirm', 'buttons'].includes(message.template.type))
	.reduce((acc, message) => acc.concat(message.template.actions), [])
	.find(action => action.text === answer)
	
	if ( currentAction !== undefined ) {
		console.log(`[pui-map] match! next q: ${currentAction.nextTo}`);
		result.latest_msg_for = result.current_pui_step;

		if ( typeof currentAction.callback === "function" )
			result = Object.assign(result, currentAction.callback(docData));
		
		if ( typeof currentAction.nextTo === "function" ) {
			result.current_pui_step = currentAction.nextTo(Object.assign(docData, result));
		} else {
			result.current_pui_step = currentAction.nextTo;
		}
	}
	// @TODO: no match sendMessage ไม่เข้าใจ ช่วยตอบคำถามใหม่อีกครั้ง

	// call all callback if there is evaluated result
	if (result.current_pui_step.indexOf("e") === 0) {
		let evalData = Object.assign(docData, result);

		puiList[result.current_pui_step]
		.filter(message => (typeof message.callback === "function"))
		.map(message => message.callback)
		.forEach(callback => Object.assign(result, callback(evalData)))
	}
	return result;
}

const sendMessage = (messages, response, token) => {
	let body = {
		type: 'message',
		replyToken: token,
		messages: messages
	};

	return axios.post('https://api.line.me/v2/bot/message/reply', body)
	.catch(error => {
		console.log('[Error] push message: ', error.message, error.details)
		return error;
	})
	.then(() => {
		if (response) response.status(200).end(); // verify line webhook
		return true;
	})
}

exports.pui = functions.https.onRequest((request, response) => {
	let token = request.body.events[0].replyToken;
	let uid = request.body.events[0].source.userId;
	let message = request.body.events[0].message.text;

	if (message === "คำแนะนำ") {
		sendMessage(followups.general_recommend, response, token);
	} else if (message === "เกี่ยวกับเรา") {
		sendMessage(followups.short_policy, response, token);
	} else {
		let puiRef = admin.firestore().collection('puis').doc(uid);
		let getDoc = puiRef.get()
		.then(doc => {
			let puiData;

			if (!doc.exists || message === "resetx") {
				puiData = {
					line_user_id: uid,
					current_pui_step: rootPuiNode,
					latest_msg: message,
					created_at: FieldValue.serverTimestamp(),
					updated_at: FieldValue.serverTimestamp(),
				}
				puiRef.set(puiData)
			} else {
				if (doc.data().current_pui_step.indexOf("e") === 0) { // evaluated do nothing
					puiData = {
						current_pui_step: doc.data().current_pui_step,
						latest_msg: message,
						updated_at: FieldValue.serverTimestamp(),
					}
				} else {
					puiData = puiMap(doc.data().current_pui_step, message, doc.data());
				}
				puiRef.update(puiData);
			}

			return puiData;
		})
		.then(puiData => {
			sendMessage(puiList[puiData.current_pui_step], response, token);
			
			return puiData;
		})
		.catch(err => {
			console.log('[Error] firestore', err);
			return err;
		});	
	}
});
