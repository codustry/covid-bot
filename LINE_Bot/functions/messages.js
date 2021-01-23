const followups = {
	take_action_now: [{
		"type": "text",
		"text": "โปรดโทรติดต่อเบอร์ 1422 กรมควบคุมโรค เพื่อรับการตรวจ พร้อมข้อปฏิบัติ 📱\n\nโปรดโทรทันทีที่ทำได้นะครับ 😌",
	}],
	short_policy: [{
		"type": "text",
		"text": "แชทบอทนี้\n✅ ใช้ข้อมูลล่าสุด\n✅ เคารพข้อมูลส่วนบุคคล\n✅ ไม่หาประโยชน์เชิงธุรกิจ\n❌ ไม่ใช่คำวินิจฉัยแพทย์\n\nอ้างอิงข้อมูลของกรมควบคุมโรคอัพเดทวันที่ 20 มีนาคม 2563",
	}, {
		"type": "template",
		"altText": "รายละเอียดเพิ่มเติม",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "uri",
				"label": "รายละเอียดเพิ่มเติม",
				"uri": "https://freaklab.org/projects/covid-bot/"
			}],
			"text": "รายละเอียดเพิ่มเติมได้ที่ปุ่มด้านล่าง"
		}
	}],
	//  {
	// 	"type": "template",
	// 	"altText": "this is a buttons template",
	// 	"template": {
	// 	"type": "buttons",
	// 	"actions": [{
	// 		"type": "uri",
	// 		"label": "รายชื่อสถานที่เสี่ยง",
	// 		"uri": "https://ddc.moph.go.th/viralpneumonia/file/check_covid19_250363.pdf"
	// 	}, {
	// 		"type": "uri",
	// 		"label": "เว็บไซต์กรมควบคุมโรค",
	// 		"uri": "https://ddc.moph.go.th/viralpneumonia/index.php"
	// 	}],
	// 	"thumbnailImageUrl": "https://images.chatfuel.com/bot/raw/7539f523-d721-4077-86fe-744aa974da24?timestamp=1585757184659",
	// 	"title": "🔍 ตรวจสอบสถานที่เสี่ยง",
	// 	"text": "ตรวจสอบรายชื่อจังหวัด สถานที่เสี่ยงได้ตามรายการด้านล่างครับ"
	//   }
	// }],
	general_recommend: [{
	  "type": "template",
	  "altText": "คำแนะนำ",
	  "template": {
	    "type": "carousel",
	    "actions": [],
	    "columns": [
	      {
	        "thumbnailImageUrl": "https://images.chatfuel.com/bot/raw/e8544797-7427-47eb-922d-624b5c5a7c97?timestamp=1585757558165",
	        "title": "หมั่นล้างมือด้วยสบู่ หรือเจลแอลกอฮอล์",
	        "text": "หมั่นล้างมือด้วยสบู่ หรือเจลแอลกอฮอล์ความเข้มข้น 70% ขึ้นไป",
	        "actions": [
	          {
	            "type": "uri",
	            "label": "คลิกเพื่อดูวิดีโอ 🎦",
	            "uri": "https://www.youtube.com/watch?v=E5nV-6iFm-M"
	          }
	        ]
	      },
	      {
	        "thumbnailImageUrl": "https://images.chatfuel.com/bot/raw/10d8b768-2599-40c6-8201-10edeb648e61?timestamp=1585757684146",
	        "title": "สวมหน้ากากอนามัย",
	        "text": "ดูวิดีโอ 🎦 การใส่หน้าการอนามัยที่ถูกวิธี",
	        "actions": [
	          {
	            "type": "uri",
	            "label": "คลิกเพื่อดูวิดีโอ 🎦",
	            "uri": "https://www.youtube.com/watch?v=UYoIWuuU3Jk"
	          }
	        ]
	      },
	      {
	        "thumbnailImageUrl": "https://images.chatfuel.com/bot/raw/94eb3128-7a87-49d1-9ff6-5bf1a501b2a9?timestamp=1585757736672",
	        "title": "ไม่ไปที่ที่คนพลุกพล่าน แออัด",
	        "text": "ดูแผนที่การแพร่ระบาด 🧭 และสถิติ 📊",
	        "actions": [
	          {
	            "type": "uri",
	            "label": "คลิกเพื่อดู",
	            "uri": "http://th-stat.com/"
	          }
	        ]
	      },
	      {
	        "thumbnailImageUrl": "https://images.chatfuel.com/bot/raw/b5f2a364-9aa1-4076-b81d-2d08bbecda75?timestamp=1585757803398",
	        "title": "รักษาระยะห่าง 2 เมตร ในการพูดคุย",
	        "text": "รักษาระยะห่าง 2 เมตร ในการพูดคุย",
	        "actions": [
	          {
	            "type": "message",
	            "label": "รักษาระยะห่าง 2 เมตร",
	            "text": "รักษาระยะห่าง 2 เมตร ในการพูดคุย"
	          }
	        ]
	      }
	    ]
	  }
	}]
}

const puiList = {
	q000: [{
		"type": "text",
		"text": "เราจะถามคำถามสั้นๆ ใช้เวลาไม่กี่นาที และช่วยคุณประเมินว่า คุณมีความเสี่ยงต่อโรคมากน้อยเพียงใด เข้าเกณฑ์เข้ารับการตรวจตามประกาศกรมควบคุมโรคหรือไม่",
	}, {
		"type": "template",
		"altText": "เริ่มการประเมินกันเลย",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "เริ่ม",
				"text": "เริ่ม",
				"nextTo": "q010",
			}],
			"text": "เริ่มเลยนะครับ 😊"
		}
	}],
	q010: [{
		"type": "template",
		"altText": "มีอาการไอ?",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "มี",
				"text": "มี",
				"nextTo": "q020",
				"callback": (data) => { return {hasSymtoms: (data.hasSymtoms || 0)+1} }
				}, {
				"type": "message",
				"label": "ไม่มี",
				"text": "ไม่มี",
				"nextTo": "q020"
			}],
			"title": "มีอาการไอ?",
			"text": "คุณมีอาการไอ เจ็บคอ มีเสมหะ มีน้ำมูก หายใจลำบาก อย่างใดอย่างหนึ่งหรือไม่?"
		}
	}],
	q020: [{
		"type": "template",
		"altText": "คุณมีไข้ ตัวร้อน หรือรู้สึกครั่นเนื้อครั่นตัว อย่างใดอย่างหนึ่งหรือไม่?",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "มี",
				"text": "มี",
				"nextTo": (data) => {return (data.hasSymtoms > 0 && ! data.groupSymtoms) ? "q021" : "q030"},
				"callback": (data) => { return {hasSymtoms: (data.hasSymtoms || 0)+1} }
				}, {
				"type": "message",
				"label": "ไม่มี",
				"text": "ไม่มี",
				"nextTo": (data) => {return (data.hasSymtoms > 0 && !data.groupSymtoms) ? "q021" : "q030"},
			}],
			"title": "มีไข้?",
			"text": "คุณมีไข้ ตัวร้อน หรือรู้สึกครั่นเนื้อครั่นตัว อย่างใดอย่างหนึ่งหรือไม่?"
		}
	}],
	q021: [{
		"type": "template",
		"altText": "คุณเป็นไข้หวัดพร้อมๆกับคนอื่นอีกอย่างน้อย 4 คน หลังจากที่ได้เข้าใช้สถานที่เดียวกันในช่วงสัปดาห์ที่ผ่านมาหรือไม่?",
		"template": {
			"type": "confirm",
			"actions": [{
				"type": "message",
				"label": "ใช่",
				"text": "ใช่",
				"nextTo": "q030",
				"callback": (data) => { return {groupSymtoms: 1} }
				}, {
				"type": "message",
				"label": "ไม่ใช่",
				"text": "ไม่ใช่",
				"nextTo": "q030",
				"callback": (data) => { return {groupSymtoms: 0} }
			}],
			"text": "คุณเป็นไข้หวัดพร้อมๆกับคนอื่นอีกอย่างน้อย 4 คน หลังจากที่ได้เข้าใช้สถานที่เดียวกันในช่วงสัปดาห์ที่ผ่านมาหรือไม่?"
		}
	}],
	q030: [{
		"type": "template",
		"altText": "เดินทางมาจากต่างประเทศหรือไม่?",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "ไปมา",
				"text": "ไปมา",
				"nextTo": "q070",
				"callback": (data) => { return {travel: 1} }
				}, {
				"type": "message",
				"label": "เปล่า",
				"text": "เปล่า",
				"nextTo": "q070"
			}],
			"text": "คุณได้เดินทางมาจากต่างประเทศ 🗺ในช่วง 2 สัปดาห์ที่ผ่านมาหรือไม่?"
		}
	}],
	// q040: [{
	// 	"type": "template",
	// 	"altText": "เมื่อ 2 สัปดาห์ที่ผ่านมา คุณได้เดินทางผ่าน ประเทศจีน-ฮ่องกง มาเก๊า เกาหลีใต้ อิหร่าน อิตาลี หรือไม่?",
	// 	"template": {
	// 		"type": "confirm",
	// 		"actions": [{
	// 			"type": "message",
	// 			"label": "ฉันไปมา",
	// 			"text": "ฉันไปมา",
	// 			"nextTo": "q050",
	// 			"callback": (data) => { return {RiskFactor: (data.RiskFactor || 0)+1, WentTier1: 1} }
	// 			}, {
	// 			"type": "message",
	// 			"label": "ไม่ได้ไป",
	// 			"text": "ไม่ได้ไป",
	// 			"nextTo": "q050"
	// 		}],
	// 		"text": "เมื่อ 2 สัปดาห์ที่ผ่านมา คุณได้เดินทางผ่าน ประเทศจีน-ฮ่องกง มาเก๊า เกาหลีใต้ อิหร่าน อิตาลี หรือไม่?"
	// 	}
	// }],
	// q050: [{
	// 	"type": "flex",
	// 	"altText": "Flex Message",
	// 	"contents": {
	// 		"type": "bubble",
	// 		"header": {
	// 			"type": "box",
	// 			"layout": "horizontal",
	// 			"contents": [{
	// 				"type": "text",
	// 				"text": "รายชื่อพื้นที่มีการระบายต่อเนื่อง",
	// 				"size": "lg",
	// 				"weight": "bold",
	// 				"color": "#000000"
	// 			}]
	// 		},
	// 		"hero": {
	// 			"type": "image",
	// 			"url": "https://images.chatfuel.com/bot/raw/cc68250f-0cc8-4791-932b-61e3a5a57a34",
	// 			"size": "full",
	// 			"aspectRatio": "1:1",
	// 			"aspectMode": "cover",
	// 			"action": {
	// 				"type": "uri",
	// 				"label": "Action",
	// 				"uri": "https://ddc.moph.go.th/viralpneumonia/index.php"
	// 			}
	// 		},
	// 		"body": {
	// 			"type": "box",
	// 			"layout": "horizontal",
	// 			"spacing": "md",
	// 			"contents": [{
	// 				"type": "text",
	// 				"text": "สามารถตรวจสอบรายการหรือข้อมูลเพิ่มเติมได้ตามลิ้งค์นี้เลยครับ",
	// 				"flex": 0,
	// 				"align": "start",
	// 				"gravity": "center",
	// 				"color": "#6A6A6A",
	// 				"wrap": true
	// 			}]
	// 		},
	// 		"footer": {
	// 			"type": "box",
	// 			"layout": "horizontal",
	// 			"contents": [{
	// 				"type": "button",
	// 				"action": {
	// 					"type": "uri",
	// 					"label": "ตรวจสอบพื้นที่เสี่ยง",
	// 					"uri": "https://ddc.moph.go.th/viralpneumonia/index.php"
	// 				}
	// 			}]
	// 		}
	// 	}
	// }, {
	// 	"type": "template",
	// 	"altText": "2 สัปดาห์ที่ผ่านมาคุณได้เดินทางผ่านประเทศตามภาพข้างต้นหรือไม่?",
	// 	"template": {
	// 		"type": "buttons",
	// 		"actions": [{
	// 			"type": "message",
	// 			"label": "ฉันไปมา",
	// 			"text": "ฉันไปมา",
	// 			"nextTo": "q060",
	// 			"callback": (data) => { return {RiskFactor: (data.RiskFactor || 0)+1, WentTier2: 1} }
	// 			}, {
	// 			"type": "message",
	// 			"label": "ไม่ได้ไป",
	// 			"text": "ไม่ได้ไป",
	// 			"nextTo": "q060"
	// 		}],
	// 		"text": "2 สัปดาห์ที่ผ่านมาคุณได้เดินทางผ่านประเทศตามภาพข้างต้นหรือไม่?"
	// 	}
	// }],
	// q060: [{
	// 	"type": "template",
	// 	"altText": "Family/resident",
	// 	"template": {
	// 		"type": "confirm",
	// 		"actions": [{
	// 			"type": "message",
	// 			"label": "มี",
	// 			"text": "มี",
	// 			"nextTo": "q070",
	// 			"callback": (data) => { return {RiskFactor: (data.RiskFactor || 0)+1, withTraveler: 1} }
	// 			}, {
	// 			"type": "message",
	// 			"label": "ไม่มี",
	// 			"text": "ไม่มี",
	// 			"nextTo": "q070"
	// 		}],
	// 		"text": "ในบ้านหรือห้องพัก มีคนเดินทางมาจากพื้นที่เสี่ยงในช่วง 14 วันหรือไม่?\nพื้นที่เสี่ยงได้แก่ รายการในรูปด้านบน และ ประเทศจีน-ฮ่องกง มาเก๊า ไต้หวัน* สิงคโปร์* เกาหลีใต้ อิตาลี อิหร่าน ครับ\n* เฉพาะผู้ที่เดินทางจากไต้หวันและสิงคโปร์ก่อนวันที่ 14 มีนาคม 2563"
	// 	}
	// }],
	q070: [{
		"type": "template",
		"altText": "คุณประกอบอาชีพที่เกี่ยวข้องกับนักท่องเที่ยว สถานที่แออัด หรือติดต่อกับคนจำนวนมาก หรือไม่? 👥",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "ใช่",
				"text": "ใช่",
				"nextTo": "q071",
				"callback": (data) => { return {RiskFactor2: (data.RiskFactor2 || 0)+1, withForeigner: 1} }
				}, {
				"type": "message",
				"label": "ไม่ใช่",
				"text": "ไม่ใช่",
				"nextTo": "q071"
			}],
			"text": "คุณประกอบอาชีพที่เกี่ยวข้องกับนักท่องเที่ยว สถานที่แออัด หรือติดต่อกับคนจำนวนมาก หรือไม่? 👥"
		}
	}],
	q071: [{
		"type": "template",
		"altText": "คุณได้ไปในที่สาธารณะหรือไม่ในช่วง 2 สัปดาห์ที่มาหรือไม่?",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "message",
				"label": "ใช่",
				"text": "ใช่",
				"nextTo": "q080",
				"callback": (data) => { return {RiskFactor2: (data.RiskFactor2 || 0)+1, withForeigner: 1} }
				}, {
				"type": "message",
				"label": "ไม่ใช่",
				"text": "ไม่ใช่",
				"nextTo": "q080"
			}],
			"text": "คุณได้ไปในที่สถานที่ชุมนุมชน หรือ สถานที่ที่มีการรวมกลุ่มคนเช่นตลาด ห้างสรรพสินค้า สถานพยาบาล หรือ ขนส่งสาธารณะ ในช่วง 2 สัปดาห์ที่ผ่านมาหรือไม่? 🤔"
		}
	}],
	q080: [{
		"type": "template",
		"altText": "คุณเคยสัมผัสหรือทำกิจกรรมร่วมกับผู้ติดเชื้อ",
		"template": {
			"type": "confirm",
			"actions": [{
				"type": "message",
				"label": "ใช่",
				"text": "ใช่",
				"nextTo": "q081",
				"callback": (data) => { return {RiskFactor: (data.RiskFactor || 0)+1} }
				}, {
				"type": "message",
				"label": "ไม่ใช่",
				"text": "ไม่ใช่",
				"nextTo": "q081",
			}],
			"text": "คุณเคยทำกิจกรรมร่วมกับผู้ที่ได้รับการตรวจยืนยันว่าเป็นโรค COVID-19 หรือไม่?"
		}
	}],
	q081: [{
		"type": "template",
		"altText": "รบกวนตรวจสอบรายชื่อจังหวัดและสถานที่เสี่ยงตามรายการในปุ่มด้านล่างครับ",
		"template": {
			"type": "buttons",
			"actions": [{
				"type": "uri",
				"label": "🗺️ ตรวจสอบสถานที่",
				"uri": "https://ddc.moph.go.th/viralpneumonia/file/check_covid19_020463n.pdf"
			}],
			"text": "🔍 รบกวนตรวจสอบรายชื่อจังหวัดและสถานที่เสี่ยงตามรายการในปุ่มด้านล่างครับ"
		}
	}, {
		"type": "template",
		"altText": "คุณได้ไปสถานที่ข้างต้น ในช่วงเวลาเดียวกับที่พบผู้ติดเชื้อหรือไม่?",
		"template": {
			"type": "confirm",
			"actions": [{
				"type": "message",
				"label": "ใช่",
				"text": "ใช่",
				"nextTo": (data) => evaluate(data),
				"callback": (data) => { return {RiskFactor: (data.RiskFactor || 0)+1} }
				}, {
				"type": "message",
				"label": "ไม่ใช่",
				"text": "ไม่ใช่",
				"nextTo": (data) => evaluate(data),
			}],
			"text": "คุณได้ไปสถานที่ข้างต้น ในช่วงเวลาเดียวกับที่พบผู้ติดเชื้อหรือไม่?"
		}
	}],
	e000: [{
		"type": "text",
		"text": "ระบบไม่สามารถประเมินได้ ❌\nเจ้าหน้าที่จะแก้ไขและแจ้งให้ทราบทีหลังครับ",
		"callback": (data) => { return {error: 1} }
	}],
	eR4: followups.short_policy.concat(followups.general_recommend, [{
		"type": "text",
		"text": "ผลการประเมินคือ...\n\nคุณอยู่ในกลุ่มเสี่ยงสูงมาก",
	}, {
		"type": "text",
		"text": "คุณเข้าข่ายรับสิทธิเข้ารับการตรวจรักษาที่โรงพยาบาลตามสิทธิการรักษาของท่าน 🏥\n\nอย่าลืม! สวมหน้ากากอนามัย ล้างมือ🧼 และรักษาสุขอนามัย ตลอดการเดินทาง 🚗\n\nระหว่างนี้โปรดทำตามหลักอนามัยอย่างเคร่งครัด เพื่อความปลอดภัยของทุกคน ❤️",
		"callback": (data) => { return {R4FollowUp: 1, evaluated: "R4"} }
	}]),
	eR3: [{
		"type": "text",
		"text": "ผลการประเมินคือ...\n\nคุณมีโอกาสเสี่ยง",
	}, {
		"type": "text",
		"text": "ควรกักตัวที่บ้าน 14 วัน และปฏิบัติตนตามคำแนะนำด้านล่างอย่างเคร่งครัด เพื่อลดโอกาสการแพร่เชื้อสู่ผู้อื่น\n\nหากมีอาการให้โทรติดต่อ 1422 กรมควบคุมโรค ทันทีที่ทำได้ครับ",
		"callback": (data) => { return {quarantineDay: 0, R3FollowUp: 1, evaluated: "R3"} }
	}],
	eR2_5: followups.short_policy.concat(followups.general_recommend, [{
		"type": "text",
		"text": "ผลการประเมินคือ...\n\nคุณอยู่ในกลุ่มเสี่ยงน้อย แต่ควรเพิ่มความระมัดระวัง",
	}, {
		"type": "text",
		"text": "ควรใส่อุปกรณ์ป้องกันตัวเอง เช่น หน้ากากอนามัยขณะทำงาน😷 และหมั่นล้างมือด้วยสบู่และแอลกอฮอล์ 🧼\n\nถ้ามีอาการไข้ร่วมกับไอ ควรโทรแจ้ง 1422 ทันทีและรีบไปพบแพทย์",
		"callback": (data) => { return {R2_5FollowUp: 1, evaluated: "R2.5"} }
	}]),
	eR2: followups.short_policy.concat(followups.general_recommend, [{
		"type": "text",
		"text": "ผลการประเมินคือ...\n\nคุณอยู่ในกลุ่มเสี่ยงน้อย อาจเป็นโรคอื่นๆ เช่น โรคไข้หวัด โรคไข้หวัดใหญ่ มากกว่า 😉",
	}, {
		"type": "text",
		"text": "อย่างไรก็ตามเนี่องจากคุณมีอาการ ขอให้รักษาอนามัยตามคำแนะนำด้านล่าง\n\nถ้ามีอาการไข้ร่วมกับไอ ควรโทรแจ้ง 1422 ทันทีและรีบไปพบแพทย์",
		"callback": (data) => { return {R2FollowUp: 1, evaluated: "R2"} }
	}]),
	eR1: followups.short_policy.concat([{
		"type": "text",
		"text": "ผลการประเมินคือ...\n\nคุณอยู่กลุ่มเสี่ยงน้อยมากไม่จำเป็นต้องไปตรวจ COVID-19 👍",
	}, {
		"type": "text",
		"text": "เรามีคำแนะนำดีๆมาฝากครับ",
		"callback": (data) => { return {evaluated: "R1"} }
	}], followups.general_recommend),
}

function evaluate(data) {
	let evalData = Object.assign({wentTier1: 0, wentTier2: 0, groupSymtoms: 0, RiskFactor: 0, hasSymtoms: 0, withForeigner: 0}, data);
	if (evalData.hasSymtoms === 2 && (evalData.RiskFactor > 0 || evalData.withForeigner === 1)) return "eR4";
	else if (evalData.groupSymtoms === 1) return "eR4";
	else if (evalData.travel === 1) return "eR3";
	else if (evalData.hasSymtoms !== 2 && evalData.RiskFactor > 0) return "eR3";
	else if (evalData.RiskFactor2 > 0 && evalData.hasSymtoms === 0 && evalData.RiskFactor === 0) return "eR2_5";
	else if (evalData.hasSymtoms !== 2 && evalData.withForeigner === 1) return "eR2_5";
	else if (evalData.hasSymtoms > 0 && evalData.RiskFactor === 0) return "eR2";
	else if (evalData.hasSymtoms === 0 && evalData.RiskFactor === 0) return "eR1";
	return "e000"; // fallback case
}

exports.puiList = puiList;
exports.followups = followups;
