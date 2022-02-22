/*
# Haruka - UserBot
# Copyright (C) 2021 Haruka-Bot Created By ZeeoneOfc
# BOT INDO CUMA NGEMBANGIN BASE ZEEONE DOANG (HARUKA)
# This file is a part of < https://github.com/zeeoneofc/Haruka/ >
# PLease read the GNU Affero General Public License in
# <https://www.github.com/zeeoneofc/Haruka/blob/v1/LICENSE/>.
*/ 
/*
THANKS TO
ï ZEEONE OFC
ï ALDI FAUZI
ï BOT INDO
ï APRILIA
ï FARID MHRDKAA
ï SANZY YT
*/
// WhatsApp api
const
	{
		WAConnection ,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
	
//module exports
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ig = require('insta-fetcher')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const brainly = require('brainly-scraper')
const xa = require('xfarr-api')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const zee = require('api-alphabot')

//library
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color')
const { webp2mp4File} = require('../lib/webp2mp4')
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('../lib/photooxy')
const { yta, ytv, igdl, upload, formatDate } = require('../lib/download')
const simple = require('../lib/simple')
const { mediafireDl } = require('../lib/mediafire')
const { uploadImages } = require('../lib/uploadimage')

//json
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))

const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))

//settings
const setting = JSON.parse(fs.readFileSync('./settings/config.json'))
let {
	ownername,
	ownernumber,
	botname,
	session_name,
	background
	} = setting
let thumbnail = fs.readFileSync(setting.thumbnail)
let limitawal = setting.limit.free

/*
# language
# available now [ind]
*/
const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

//start script
			async function starts() {
				const haruka = new WAConnection()
				haruka.version = [2, 2143, 3]  //jika ada update dari WhatsApp web silahkan ubah
				haruka.logger.level = 'warn'
				console.log(color(figlet.textSync('LoLi-Bot', {
					font: 'Standard',
					horizontalLayout: 'default',
					vertivalLayout: 'default',
					whitespaceBreak: false
					}), 'skyblue'))
				haruka.on('qr', () => {
					console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR MASK 15 SECONDS, AND SUBSCRIBE YOUTUBE BOT INDO'))
					})
			fs.existsSync(`./settings/${session_name}`) && haruka.loadAuthInfo(`./settings/${session_name}`)
			haruka.on('connecting', () => {
				console.log('|\x1b[1;32m TRM \x1b[1;37m|', color('Connecting...', 'yellow'))
				})
			haruka.on('open', () => {
				console.log('|\x1b[1;32m TRM \x1b[1;37m|', color('Connected', 'yellow'))
			})
			await haruka.connect({timeoutMs: 30*1000})
			fs.writeFileSync(`./settings/${session_name}`, JSON.stringify(haruka.base64EncodedAuthInfo(), null, '\t'))

					
//greetings
				haruka.on('group-participants-update', async(anu) => {
					try {
						const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await haruka.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const mdata = await haruka.groupMetadata(anu.jid)
						console.log(anu)
						num = anu.participants[0]
						let v = haruka.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
						try {
							ppmem = await haruka.getProfilePicture(num);
							} catch (e) {
								ppmem = 'https://telegra.ph/file/f8df36078279304745bae.png'
								}
						try {
							ppgc = await haruka.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://telegra.ph/file/d4c05638fa7886a1d8060.jpg'
								}
						let ppmem2 = await getBuffer(ppmem)
						let ppmem3 = await uploadImages(ppmem2)
						let ppgc2 = await getBuffer(ppgc)
						let ppgc3 = await uploadImages(ppgc2)
						let gakloo = [{
										"buttonId": `.owner`,
										"buttonText": {
											"displayText": "Welcome üëã"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(haruka.user.jid)) {
							welcome = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/welcome2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), `Welcome Message By ${ownername}`,welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome ü§ó"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Welcome @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), `Welcome Message By ${ownername}`,ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome ü§ó"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(haruka.user.jid)) {
							goodbye = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/goodbye2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n‚åØ÷∏   ÷ôLeave from group:\n${mdata.subject}` + '\n' + lang.leave(), `Leave Message By ${ownername}`,goodbye, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye ü§≤"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Goodbye @${num.split('@')[0]}\n‚åØ÷∏   ÷ôLeave from group:\n${mdata.subject}` + '\n' + lang.leave(), `Leave Message By ${ownername}`,ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye ü§≤"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
				})
				
				haruka.on('chat-update', async (mek) => {
					try {
						if (!mek.hasNewMessage) return
						 mek = mek.messages.all()[0]
						if (!mek.message) return
						if (mek.key && mek.key.remoteJid == 'status@broadcast') return
						if (mek.key.fromMe) return
						mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
						const content = JSON.stringify(mek.message)
						const from = mek.key.remoteJid
						const type = Object.keys(mek.message)[0]
						const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
						const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
						const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
						const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
						var prefix = /^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ¢‚úì|~zZ+√ó_*!#$%^&./\\¬©^]/.test(cmd) ? cmd.match(/^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ¢‚úì|~+√ó_*!#$,|`√∑?;:%%^&./\\¬©^]/gi) : '#'
						body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
						var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
						const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
						budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
						const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
						const arg = budy.slice(command.length + 2, budy.length)
						const args = body.trim().split(/ +/).slice(1)
						const txt = mek.message.conversation	
						const q = args.join(' ')
						const runtime = process.uptime()   
						const isCmd = body.startsWith(prefix)
						const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = haruka.user.phone
						const botNumber = haruka.user.jid
						const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
						const isGroup = from.endsWith('@g.us')
						const totalchat = await haruka.chats.all()
						const sender = mek.key.fromMe ? haruka.user.jid : isGroup ? mek.participant : mek.key.remoteJid
						const isOwner = mek.key.fromMe ? haruka.user.jid : ownerNumber.includes(sender)
						const conts = mek.key.fromMe ? haruka.user.jid : haruka.contacts[sender] || { notify: jid.replace(/@.+/, '') }
						const pushname = mek.key.fromMe ? haruka.user.name : conts.notify || conts.vname || conts.name || '-'
						
						//apaya
						const isAntiLink = isGroup ? antilink.includes(from) : false
						const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
						const groupMetadata = isGroup ? await haruka.groupMetadata(from) : ''
						const groupName = isGroup ? groupMetadata.subject : ''
						const groupId = isGroup ? groupMetadata.jid : ''
						const groupMembers = isGroup ? groupMetadata.participants : ''
						const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
						const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
						const isGroupAdmins = groupAdmins.includes(sender) || false
						
			//fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} üèüÔ∏è\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `¬© ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`¬© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} üèüÔ∏è\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `¬© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `¬© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`¬© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `¬© ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `¬© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
		
			const addRegisteredUser = (userid, sender, time, serials) => {
				const obj = { id: userid, name: sender, time: time, serial: serials }
				_registered.push(obj)
				fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
			}
			const createSerial = (size) => {
				return crypto.randomBytes(size).toString('hex').slice(0, size)
			}
			function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };
			
			const checkRegisteredUser = (sender) => {
				let status = false
				Object.keys(_registered).forEach((i) => {
					if (_registered[i].id === sender) {
						status = true
						}
					})
				return status
			}
			
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return haruka.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: mek})
						haruka.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
						haruka.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							haruka.sendMessage(from, lang.limitend(pushname), text, {quoted: mek})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
					}
				}
						
			//function
			const reply = (teks) => {
				haruka.sendMessage(from, teks, text, { quoted: mek, thumbnail: thumbnail})
			}
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? haruka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : haruka.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
			}
		    const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			const sendMess = (hehe, teks) => {
				haruka.sendMessage(hehe, teks, text)
			}
			
			const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        haruka.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
					const fn = Date.now() / 10000;
					const filename = fn.toString()
					let mime = ""
					var download = function (uri, filename, callback) {
						request.head(uri, function (err, res, body) {
							mime = res.headers['content-type']
							request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
							});
							};
							download(url, filename, async function () {
								console.log('done');
								let media = fs.readFileSync(filename)
								let type = mime.split("/")[0]+"Message"
								if(mime === "image/gif"){
									type = MessageType.video
									mime = Mimetype.gif
									}
									if(mime.split("/")[0] === "audio"){
										mime = Mimetype.mp4Audio
										}
										haruka.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
										fs.unlinkSync(filename)
									});
								} 
			async function sendFileFromUrl(from, url, caption, mek, men) {
				let mime = '';
				let res = await axios.head(url)
				mime = res.headers['content-type']
				let type = mime.split("/")[0]+"Message"
				if(mime === "image/gif"){
					type = MessageType.video
					mime = Mimetype.gif
					}
				if(mime === "application/pdf"){
					type = MessageType.document
					mime = Mimetype.pdf
					}
				if(mime.split("/")[0] === "audio"){
					mime = Mimetype.mp4Audio
					}
					return haruka.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, thumbnail: Buffer.alloc(0), mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
				}
				
				const getpc = async function(totalchat){
let pc = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await haruka.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

let ii = []
let giid = []
for (mem of totalchat){
	ii.push(mem.jid)
}
for (id of ii){
if (id && id.includes('g.us')){
giid.push(id)
}
}
// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						haruka.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				// antilink
                if (manti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        await haruka.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text , {quoted: mek})
		        haruka.groupRemove(from, [kic]).catch((e)=>{reply(`Bot Harus Jadi Admin`)})
		        }
		if (budy.includes(`${ownernumber}`)) {  
reply(`Kenapa tag owner saya?`)
	  }
		//antivirtex
		if (txt.length > 500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('*admin mah bebas*')
haruka.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
teks = `* VIRTEX TERDETEKSI *\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
haruka.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
haruka.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
haruka.updatePresence(from, Presence.composing)
reply("SELAMAT JALAN")
}, 0)
    }
			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat Jawaban kamu benar!", `ÔøΩ ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isHaruka = checkRegisteredUser(sender)
			const isPremium = premium.includes(sender) || isOwner
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			//console termux
			console.log(chalk.black(chalk.bgWhite('| MSG |')), time, chalk.black(chalk.bgBlue(budy || command)), 'from', color(pushname), 'args :', color(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		
		const sendMediaURL2 = async(to, url, text="", mids=[]) =>{
  if(mids.length > 0){
      text = normalizeMention(to, text, mids)
  }
  const fn = Date.now() / 10000;
  const filename = fn.toString()
  let mime = ""
  var download = function (uri, filename, callback) {
      request.head(uri, function (err, res, body) {
          mime = res.headers['content-type']
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
  };
  download(url, filename, async function () {
      console.log('done');
      let media = fs.readFileSync(filename)
      let type = mime.split("/")[0]+"Message"
      if(mime === "image/gif"){
          type = MessageType.video
          mime = Mimetype.gif
      }
      if(mime.split("/")[0] === "audio"){
          mime = Mimetype.mp4Audio
      }
      haruka.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
      
      fs.unlinkSync(filename)
  });
            }
            
		const sendFileFromUrl2 = async(link, type, options) => {
      hasil = await getBuffer(link)
	haruka.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	haruka.sendMessage(from, hasil, type, options).catch(e => {
	haruka.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (command) {
case 'menu': case 'help': case 'apri':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.menu(prefix, salam, pushname), '¬© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
				break
case 'infobot':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`BASE : ZEEONEOFC\nAUTHOR : APRILIA\nSCRIPT NYA BAKAL UPDATE DI YTNYA BOT INDO`)
break
case 'cekapikey':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if(!q) return reply('apikey??')
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${args.join(' ')}`)
teks = ` *APIKEY CEK* \n\n *USERNAME :* ${anu.result.username}\n *REQUEST :* ${anu.result.requests}\n *TODAY :* ${anu.result.today}\n *AKUN TYPE :* ${anu.result.account_type}\n *EXPIRED :* ${anu.result.expired}`
haruka.sendMessage(from, teks, text, {quoted: fgif})
break
case 'get':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply(lang.owner(botname))
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
break 
case 'suit':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply('Pilih Batu,Gunting atauKertas')
query = args.join(" ")
const botol = ['Batu','Gunting','Kertas']
const suitcuy = botol[Math.floor(Math.random() * botol.length)]
brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
reply(brow)
break
case 'listgroup':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply(lang.owner(botname))
ingfoo = await getGroup(totalchat)
teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `ï Nama grup : ${ingfoo[i].subject}\nï ID grup : ${ingfoo[i].id}\nï Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nï Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break 
case 'owner':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber, "", "", "", "", "", "", "", "", "", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = haruka.contacts[i] != undefined ? haruka.contacts[i].vname || haruka.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await haruka.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					haruka.sendMessage(from, `Nih Kak Contact Owner Ku, Cuma Sv Nomor Cewe Ya ü§ù`, text, {quoted: hehe})
				}
			break
case 'donasi':
var aprian = `
*ïDONASI KAK BUAT BELI KUOTA*

*ïGOPAY : ${setting.gopay}*
*ïDANA : ${setting.dana}*
*ïOVO : ${setting.ovo}*
*ïPULSA : ${setting.pulsa}
*ïBELUM PREMIUM SCAN DIBAWAH*
*ïLINK : https://telegra.ph/file/d36414dd2d16f0b6286af.jpg*

*MAKASIH*
`
haruka.sendMessage(from, aprian, text,{quoted: fgif})
break
case 'rules':
teks = `*Syarat & Ketentuan ${botname}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
reply(teks)
break
case 'caklontong':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
data = fs.readFileSync('./database/game/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
Jawaban = '\n*'+randKey.result.desc +'*'
setTimeout( () => {
haruka.sendMessage(from, Jawaban, text, {quoted: mek})
}, 30000)
setTimeout( () => {
haruka.sendMessage(from, '_10 Detik lagiÖ_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_20 Detik lagi_Ö', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_30 Detik lagi_Ö', text) // ur cods
}, 2500) // 1000 = 1s
haruka.sendMessage(from, Pertanyaan, text, {quoted: mek})
break
case 'family100':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
data = fs.readFileSync('./database/game/family100.js');
fami = JSON.parse(data);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
haruka.sendMessage(from, '* Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: fgif}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
haruka.sendMessage(from, '_10 Detik lagiÖ_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_20 Detik lagi_Ö', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_30 Detik lagi_Ö', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
break         
                case 'kisahnabi':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: .${command} muhammad`)
                    get_result = await fetchJson(`https://app-botpri.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=Fxc7`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `Tempat : ${get_result.singgah}\n`
                    ini_txt += `Story : \n${get_result.kisah}`
                    reply(ini_txt)
                    break                
//by FARID MHRDKAA
case 'narutobanner':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pNaruto(`${q}`)
.then(res => {
sendMediaURL(from, res.url, q)
})
break
case 'shadow':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pShadow(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'romantic':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pRomantic(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'smoke':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pSmoke(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'burnpaper':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pBurnPapper(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovemsg':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pLoveMsg(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'grass':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pMsgGrass(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'doubleheart':
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pDoubleHeart(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'coffecup':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pCoffeCup(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovetext':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pLoveText(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'butterfly':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('teksnya mana?')
reply(lang.wait())
pButterfly(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'restart':
             if (!isOwner) return 
             reply(lang.wait())
             exec(`node haruka`)
             reply('_BOT BERHASIL DI RESTART_')
             break
//
case 'creategroup':
case 'creategrup':
if (!isGroup) return reply(lang.group())
if (!isOwner) return reply(lang.owner(botname)) 
if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
argza = arg.split('|')
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
for (let i = 0; i < mentioned.length; i++){
anu = []
anu.push(mentioned[i])
}
haruka.groupCreate(argza[0], anu)
reply(`Sukes membuat grup:\n${argza}`)
}
break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  const bb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buttonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtonssMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buttonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bb.message.imageMessage

            }

            await haruka.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted: fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'sound':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
const soun = fs.readFileSync('./mp3/sound.m4a')
haruka.sendMessage(from, soun, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
satu = fs.readFileSync('./mp3/sound1.mp3');
haruka.sendMessage(from, satu, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
dua = fs.readFileSync('./mp3/sound2.m4a');
haruka.sendMessage(from, dua, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
tiga = fs.readFileSync('./mp3/sound3.m4a');
haruka.sendMessage(from, tiga, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
empat = fs.readFileSync('./mp3/sound4.m4a');
haruka.sendMessage(from, empat, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
lima = fs.readFileSync('./mp3/sound5.m4a');
haruka.sendMessage(from, lima, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
enam = fs.readFileSync('./mp3/sound6.m4a');
haruka.sendMessage(from, enam, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
tujuh = fs.readFileSync('./mp3/sound7.m4a');
haruka.sendMessage(from, tujuh, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
delapan = fs.readFileSync('./mp3/sound8.m4a');
haruka.sendMessage(from, delapan, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.m4a');
haruka.sendMessage(from, sembilan, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.m4a');
haruka.sendMessage(from, sepuluh, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.m4a');
haruka.sendMessage(from, sebelas, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.m4a');
haruka.sendMessage(from, duabelas, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break
case 'toptt':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await haruka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
haruka.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: fgif, ptt:true})
})
break
case 'tomp3':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
haruka.updatePresence(from, Presence.composing) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await haruka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi video ke mp3 ')
bufferlkj = fs.readFileSync(ran)
haruka.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: fgif})
fs.unlinkSync(ran)
})
break
case 'tovideo':
case 'tomp4':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
owgi =await haruka.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result,'Done')
})
}else {
reply('reply stiker')
}
fs.unlinkSync(owgi)
break 
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await haruka.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
			.input(media)
			.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply('Eror')
					})
			.on('end', function () {
				console.log('Finish')
				haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await haruka.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`‚ùå Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else  {
								reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
							}
					
             break
					
// download fix by aprilia
case 'ig':
case 'igdl':
case 'instagram':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!q) return reply('Linknya?')
var { igDownloader } = require('../lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(lang.eror())
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'tiktok':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '¬© ' + ownername, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})
						
             break
             case 'tiktoknowm':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply(lang.wait())
anu = await fetchJson (`https://sgri-api.herokuapp.com/docs/download/tiktok?url=${args.join(' ')}&apikey=SagiriChan`)
buffer = await getBuffer (anu.result.nowm)
haruka.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS BOT INDO SU'})
break
case 'tiktokwm':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply(lang.wait())
anu = await fetchJson (`https://sgri-api.herokuapp.com/docs/download/tiktok?url=${args.join(' ')}&apikey=SagiriChan`)
buffer = await getBuffer (anu.result.wm)
haruka.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS BOT INDO SU'})
break
case 'tiktokmusic': case 'tiktokaudio':  
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(lang.wait())
			let audi = q
			hx.ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					haruka.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await haruka.sendMessage(from,di,image,{quoted: mek})
            break
case 'play': case 'song':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- „Äå PLAY MUSIC „Äç----*
						
‚Ä¢ Title : ${aramas.videos[0].title}
‚Ä¢ ID : ${aramas.videos[0].videoId}
‚Ä¢ Upload : ${aramas.videos[0].ago}
‚Ä¢ Size : ${data.medias[7].formattedSize}
‚Ä¢ Views: ${aramas.videos[0].views} 
‚Ä¢ Duration : ${aramas.videos[0].timestamp}
‚Ä¢ Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '¬© ' + ownername, thumbnail, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			
             break
case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix}ytsearch Melukis Senja`)
                    query = args.join(" ")
             reply(lang.wait())   
             get_result = await fetchJson(`https://api.dhamzxploit.my.id/api/ytsearch?q=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'inosuke': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'zenitsu': case 'natsu': case 'genos': case 'saitama': case 'rem':  
                     if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    let au = await hx.chara(`${command}`)
            let aca = au[Math.floor(Math.random() * au.length)]
            let ao = await getBuffer(aca)
            await haruka.sendMessage(from,ao,image,{quoted: fgif, caption: `Tuh foto ${command}`})
            break
case 'anime':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wiu = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)).data
          let wii = wiu[Math.floor(Math.random() * (wiu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wii))
    	  const ab = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: ab.message.imageMessage

            }

            await haruka.sendMessage(from, ButtsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'teknologi':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let asu = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Technology.json`)).data
          let titit = asu[Math.floor(Math.random() * (asu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(titit))
    	  const agb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const bunnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: bunnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: agb.message.imageMessage

            }

            await haruka.sendMessage(from, ButsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
                    case 'gamer':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let siap = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/GameWallp.json`)).data
          let itu = siap[Math.floor(Math.random() * (siap.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(itu))
    	  const aba = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const bonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BttsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: bonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: aba.message.imageMessage

            }

            await haruka.sendMessage(from, BttsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
                    case 'programmer':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wia = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Programming.json`)).data
          let hapi = wia[Math.floor(Math.random() * (wia.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(hapi))
    	  const jb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const btnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BtsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: btnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: jb.message.imageMessage

            }

            await haruka.sendMessage(from, BtsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'meme':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
let tes = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/meme.json`)).data
let tot = tes[Math.floor(Math.random() * (tes.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(tot))
const pbou = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
const bulonss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]
            const Bsessages = {
            contentText: `_© By Aprilia_`,
            buttons: bulonss,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: pbou.message.imageMessage
            }
            await haruka.sendMessage(from, Bsessages, MessageType.buttonsMessage, {quoted : fgif})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'otaku':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            haruka.sendMessage(from,ram,image,{quoted:fgif,caption:rem})
            break
    case 'komiku':
    if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
    if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await haruka.sendMessage(from,li,image,{quoted: fgif})
            break
                    case 'walpaper':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let aku = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Mountain.json`)).data
          let sapi = aku[Math.floor(Math.random() * (aku.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(sapi))
    	  const pb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buonss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: pb.message.imageMessage

            }

            await haruka.sendMessage(from, BsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'muslim':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let sapu = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Islamic.json`)).data
          let pipi = sapu[Math.floor(Math.random() * (sapu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(pipi))
    	  const pbo = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonssoi = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BsotMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buonssoi,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: pbo.message.imageMessage

            }

            await haruka.sendMessage(from, BsotMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'inori':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let sau = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)).data
          let pii = sau[Math.floor(Math.random() * (sau.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(pii))
    	  const pubo = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            const bsoi = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]
            const Bessages = {
            contentText: `_© By Aprilia_`,
            buttons: bsoi,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: pubo.message.imageMessage
            }
            await haruka.sendMessage(from, Bessages, MessageType.buttonsMessage, {quoted : fgif})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'igstalk':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		            if (!q) return reply('Usernamenya?')
		            anu = await fetchJson (`https://hardianto.xyz/api/igstalk?username=${args.join(' ')}&apikey=hardianto`)
		let infonye = `Username : ${anu.username}\nFullname : ${anu.fullname}\nBio : ${anu.bio}\nFollowers : ${anu.followers}\nFollow : ${anu.follow}`
		let siapaye = await getBuffer (anu.thumbnail)
		haruka.sendMessage(from, siapaye, image,{quoted: fgif, caption: infonye})
		            break    
		case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(lang.wait())
                axios.get(`https://api.github.com/users/${args.join(' ')}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
 Username : ${login}
 Name : ${name}
 Followers : ${followers}
 Following : ${following}
 Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
 Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
 Public Gists : ${public_gists}
 Public Repos : ${public_repos}
 Twitter : ${twitter_username}
 Email : ${email}
 Location : ${location}
 Blog : ${blog}
 Link : ${html_url}
 Bio :\n${bio}`
sendMediaURL(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(ownername, 'Error : ' + err)
                    console.log(color('[EXEC]', 'red'), err)
					reply(lang.eror)
                })
            }
                break
case 'cyber':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let war = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/CyberSpace.json`)).data
          let tipi = war[Math.floor(Math.random() * (war.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(tipi))
    	  const po = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonssi = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BsoMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buonssi,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: po.message.imageMessage

            }

            await haruka.sendMessage(from, BsoMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
//group
case 'daftar': case 'verify': case 'verif':
			if (isHaruka) return  reply(lang.regis())
			try {
					ppregis = await haruka.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender, pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), `¬© ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'mediafire':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
  if (args.length < 1) return reply('Link Nya Mana? ')
  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
  reply(lang.wait())
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `ï *MEDIAFIRE* ï

*Data Berhasil Didapatkan!*
 Nama : ${res[0].nama}
 Ukuran : ${res[0].size}
 Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl2(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'truth':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					const trut =['Pernah suka sama siapa aja? beharuka lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					haruka.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
case 'dare':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot  setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					haruka.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
case 'sangecek':
					 // Fix Bug By Aprii				
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycek':
					 // Fix Bug By Aprii				
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicek':
					 // Fix Bug By Aprii				
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					break
                case 'gantengcek':
					 // Fix Bug By Aprii				
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
		case 'cantikcek':
					 // Fix Bug By Aprii				
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			       //tes
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'kapankah':
					// Fix Case By Wahyu/Ganss
					if (!isGroup) return reply(lang.group())
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					//tes
					break
case 'jadian':
				if (!isGroup) return reply(lang.group())
				    if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
		case 'apakah':
					// Fix Case By Wahyu/Ganss
					if (!isGroup) return reply(lang.group())
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					//tes
					break
//buatan gw aprilia
  case 'pantun':
  if (!isGroup) return reply(lang.group())
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
pantun = body.slice(1)
const pan =["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambungÖ","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
const tun = pan[Math.floor(Math.random() * pan.length)]
haruka.sendMessage(from, tun, text,{quoted: fgif})
break
case 'faktaunik':
  if (!isGroup) return reply(lang.group())
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
faktaa = body.slice(1)
const fak =["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japanís Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti ìstupidî, \"senseless\" dan ìfoolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe · Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const taa = fak[Math.floor(Math.random() * fak.length)]
haruka.sendMessage(from, taa, text,{quoted: fgif})
break
case 'quotesanime':
  if (!isGroup) return reply(lang.group())
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
kontol = body.slice(1)
let kon = ["karater : Hachiman Hikigaya\nquotes : _Lebih baik dibenci karena menjadi dirimu sendiri, daripada dicintai karena menjadi orang lain._","karakter : Roronoa Zoro\nquotes : _Seperti itulah seorang kapten. Jika pemimpin terlalu lembek, kepada siapa lagi kita harus percaya?_","karakter : Monkey D. Luffy\nquotes : _Jika kau tidak mau mengambil risiko, kau tidak dapat menciptakan masa depan._","karakter : Hatake Kakashi\nquotes : _Pengalaman bukan jaminan untuk menang, karena tiap generasi akan selalu tumbuh lebih baik._","karakter : Izuku Midoriya\nquotes : _Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan._","karakter : sora\nquotes : _Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras._","karakter : Koro Sensei\nquotes : _Ujian memberikan kesempatan yang bagus untuk mengetahui arti menang dan kalah atau kuat dan lemah. Raihlah kesuksesan dan kemunduran sebanyak yang kalian bisa, murid-muridku!_","karakter : Yukino Yukinoshita\nquotes : _Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses._","karakter : killua\nquotes : _Kalau kau terus berfikir dan tak melakukan apa-apa, kau akan tertinggal jauh._","karakter : tanaka-kun\nquotes : _Kalau itu tidak bisa diselesaikan dengan usaha, jangan berusaha._","karakter : Kaori Miyazono\nquotes : _Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok._","karakter : naruto uzumaki\nquotes : _jika Kau tidak menyukai takdir Mu, jangan menerimanya. Sebaliknya, miliki keberanian untuk mengubahnya sesuai keinginan Mu._","karakter : Houtarou Oreki\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Satoshi Fukube\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Tanaka-Kun\nquotes : _Gagal itu bukan masalah, kan? Karena kalau kau gagal hari ini, masih ada besok, atau hari setelahnya, kalau perlu mungkin bisa saja butuh setahun. Hidup ini panjang, jadi meski kau tak bisa berhasil sekarang, pasti pada akhirnya kau akan berhasil._","karakter : Kayaba Akihiko\nquotes : _Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya._","karakter : saitama\nquotes : _Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri._","karakter : Kamado Tanjiro\nquotes : _Karena manusia bertindak atas keinginan hatinya, Hatinya pun akan terus bertambah kuat_","karakter : Doraemon\nquotes : _Lebih baik jadi orang bodoh yang tidak mengerti apa-apa, dari pada menjadi orang terpelajar yang tidak tahu jalan._","karakter : Nami\nquotes : _Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan._"]
let a = kon[Math.floor(Math.random() * kon.length)]
haruka.sendMessage(from, a, text,{quoted: fgif})
break
// Siapa Disni Paling Ganteng
case 'ganteng':
				if (!isGroup) return reply(lang.group())
			    if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
//SIAPA YANG PALING CANTIK 
case 'cantik':
				if (!isGroup) return reply(lang.group())
				if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break 
case 'tourl':
        if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await haruka.downloadMediaMessage(boij)
            res = await uploadImages(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'antilink':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`‚úÖ Berhasil mengaktifkan ${command}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`‚úÖ Berhasil mematikan ${command}`)
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;	
        case 'antivirtex': 
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isGroup) return reply(lang.group())
if (!isGroupAdmins) return reply(lang.admin(groupName))
if (!isBotGroupAdmins) return reply(lang.adminB())
if (args[0] === 'on') {
if (isAntiVirtex) return reply(`SUDAH MENYALA`)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
reply(`\`\`\`SUCCES MENGAKTIFKAN ANTIVIRTEX DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return reply(`SUDAH MATI`)
antivirtex.splice(from, 4)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
reply(`\`\`\`SUCCES MENONAKTIFKAN ANTIVIRTEX DI GROUP INI\`\`\``)
} else {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'readmore':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`cara menggunakan nya${prefix}${command} Hai beb|an`)
var kls = body.slice(10)
var has = kls.split("|")[0];
var kas = kls.split("|")[1];
haruka.sendMessage(from, `${has}${kas}` , text, { quoted: mek })
break
        case 'futanari':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
               reply(lang.wait())
                buffer = await getBuffer(`https://api.dapuhy.xyz/api/nsfw/nsfwfutanari?apikey=B0ZTfKR00k`)
                const bba = await haruka.prepareMessage(from, buffer, MessageType.image)

            const buttons = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButonsMerssages = {

            contentText: `_© By Aprilia_`,

            buttons: buttons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bba.message.imageMessage

            }

            await haruka.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted : fgif})
                break 
                case 'neko':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                reply(lang.wait())
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/neko`)
                const zd = await haruka.prepareMessage(from, buffer, MessageType.image)

            const sn = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BeutonMesages = {

            contentText: `_© By Aprilia_`,

            buttons: sn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: zd.message.imageMessage

            }

            await haruka.sendMessage(from, BeutonMesages, MessageType.buttonsMessage, {quoted : fgif})
                break
    case 'anal':
          if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          reply(lang.wait())
          aku = (`https://hardianto.xyz/api/anime/random?nsfw=anal&apikey=hardianto`)
          kon = await getBuffer(aku)
          pll = `© By Aprilia`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}anal`,
            buttonText: {
              displayText: `Next`,
            },
            type: 1,
          },
        ]);                 
                    break      
                    case 'creator':
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: Aprii\n`  
            + `ORG:Aprilia;\n` 
            + `TEL;type=CELL;type=VOICE;waid=628811929177:+628811929177\n`  
            + 'END:VCARD'  
  haruka.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'butuh info tentang apa ya?'
           sendButMessage(from, titid, `Klik Untuk Mengetahui Info`, [
          {
            buttonId: `${prefix}insta`,
            buttonText: {
              displayText: `INSTAGRAM`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}channel`,
            buttonText: {
              displayText: `YT BOT INDO`,
            },
            type: 1,
          },
]);
                 break
case 'channel':
                function _0x2a67(_0x5661d6,_0x1cec61){var _0x26175e=_0x2617();return _0x2a67=function(_0x2a67b4,_0x20cd38){_0x2a67b4=_0x2a67b4-0x6a;var _0x10ba08=_0x26175e[_0x2a67b4];return _0x10ba08;},_0x2a67(_0x5661d6,_0x1cec61);}var _0x47e7ac=_0x2a67;(function(_0x552708,_0xabf90f){var _0x3fb0a3=_0x2a67,_0x543d1b=_0x552708();while(!![]){try{var _0x5605f7=parseInt(_0x3fb0a3(0x70))/0x1*(parseInt(_0x3fb0a3(0x73))/0x2)+parseInt(_0x3fb0a3(0x6f))/0x3*(-parseInt(_0x3fb0a3(0x72))/0x4)+-parseInt(_0x3fb0a3(0x6a))/0x5+parseInt(_0x3fb0a3(0x6e))/0x6+-parseInt(_0x3fb0a3(0x6c))/0x7+-parseInt(_0x3fb0a3(0x71))/0x8+parseInt(_0x3fb0a3(0x6d))/0x9;if(_0x5605f7===_0xabf90f)break;else _0x543d1b['push'](_0x543d1b['shift']());}catch(_0x4bfa5f){_0x543d1b['push'](_0x543d1b['shift']());}}}(_0x2617,0xc3f9b),reply(_0x47e7ac(0x6b)));function _0x2617(){var _0x22f9a9=['165vsqiZr','11424272ArHfMA','4EtLGoH','2216cGwWNL','7113015HfkCRz','*NIH\x20CHANNEL\x20CREATORKU*\x0a*https://www.youtube.com/c/BOTINDO*','2120706NtEbVY','37820205DrhrBh','548604OJaJGt','1560567DosKLS'];_0x2617=function(){return _0x22f9a9;};return _0x2617();}
                break
case 'insta':
                var _0x23b6d4=_0x3aea;function _0x5614(){var _0x27bc5f=['*NIH\x20INSTAGRAM\x20CREATORKU*\x0a*https://instagram.com/aprigans_*','28LjKAWJ','12051sbegic','661659wOyauE','20445IyNQzC','5226130UGrJBi','712882JhVcry','10zhOLZv','1600DmaIQz','1951356RgIbrg','3260492VleXxt'];_0x5614=function(){return _0x27bc5f;};return _0x5614();}function _0x3aea(_0x27e4ab,_0x54fb50){var _0x56140a=_0x5614();return _0x3aea=function(_0x3aeaa3,_0x5916c0){_0x3aeaa3=_0x3aeaa3-0xd0;var _0x412009=_0x56140a[_0x3aeaa3];return _0x412009;},_0x3aea(_0x27e4ab,_0x54fb50);}(function(_0x1932ad,_0x1b890d){var _0x358b20=_0x3aea,_0x4a621c=_0x1932ad();while(!![]){try{var _0x17936f=parseInt(_0x358b20(0xd9))/0x1+parseInt(_0x358b20(0xd1))/0x2+-parseInt(_0x358b20(0xda))/0x3+-parseInt(_0x358b20(0xd5))/0x4*(parseInt(_0x358b20(0xd2))/0x5)+parseInt(_0x358b20(0xd4))/0x6*(parseInt(_0x358b20(0xd7))/0x7)+parseInt(_0x358b20(0xd3))/0x8*(-parseInt(_0x358b20(0xd8))/0x9)+parseInt(_0x358b20(0xd0))/0xa;if(_0x17936f===_0x1b890d)break;else _0x4a621c['push'](_0x4a621c['shift']());}catch(_0x39fc92){_0x4a621c['push'](_0x4a621c['shift']());}}}(_0x5614,0xe4b34),reply(_0x23b6d4(0xd6)));
                break
case 'delete':
case 'del':
case 'd':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
haruka.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break   
case 'shutdown':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply (lang.owner(botname))
reply(`Dahh ${botname} tidur dulu`)
await sleep(3000)
haruka.close()
break
case 'buggc':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply(lang.owner(botname))
await haruka.toggleDisappearingMessages(from)
reply("yahaha")
break
case 'ttp':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
  if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} GunturP`)
  ini_text = args.join(" ")
  sendStickerFromUrl(from, `https://hardianto.xyz/api/maker/ttp?text=${ini_text}&apikey=hardianto`)
break
                case 'attp':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh .${command} aprii`)
                reply(lang.wait())
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                haruka.sendMessage(from, ini_buffer, sticker, {quoted: fgif})
                break 
                case 'group':
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        haruka.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        haruka.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
case 'hentai':
case 'ahegao':
case 'ass':
case 'blowjob':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
let wowu = (await axios.get(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)).data
          let wawa = wowu[Math.floor(Math.random() * (wowu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wawa))
    	  const botak = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buttosss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtonsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buttosss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: botak.message.imageMessage

            }

            await haruka.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
/*
reply(lang.wait())
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result)
const sa = await haruka.prepareMessage(from, buffer, MessageType.image)

            const butons = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButonsMessages = {

            contentText: `_© By Aprilia_`,

            buttons: butons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: sa.message.imageMessage

            }

            await haruka.sendMessage(from, ButonsMessages, MessageType.buttonsMessage, {quoted : fgif})
                break 
*/
                case 'nekoh':
                if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
               reply(lang.wait())
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await haruka.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtonMessages = {

            contentText: `_© By Aprilia_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await haruka.sendMessage(from, ButtonMessages, MessageType.buttonsMessage, {quoted : fgif})
                break
        case 'add':
  try {
  if (!isGroup) return reply(lang.group())
  if (!isGroupAdmins && !isOwner) return reply(lang.admin(groupName))           
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  response = await haruka.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru≤ Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
} else {
  entah = mek.message.extendedTextMessage.contextInfo.participant
 response = await haruka.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru≤ Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
}
} catch {
return 
}
  break
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *.${command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *.${command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										haruka.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *.${command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *.${command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
case 'asupan':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply(lang.wait())
buffer = await getBuffer (`https://api.zacros.my.id/asupan/random`)
sendButVideo(from,`NIH ASUPANNYA`,'_*KLIK BUTTON DIBAWAH UNTUK MENCARI YANG LAIN*_', buffer, [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}], {quoted:mek});
break
case 'bocil':
case 'santuy':
case 'rikagusriani':
case 'ghea':
case 'ukty':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply (lang.wait())
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result.url)
sendButVideo(from,`NIH ASUPANNYA`,'_*KLIK BUTTON DIBAWAH UNTUK MENCARI YANG LAIN*_', buffer, [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}], {quoted:mek});
break
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			haruka.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			haruka.sendMessage(from, 'Sayonaraüëã', text)
			}, 0)
			break
case 'hidetag':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			var value = q
			var group = await haruka.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			haruka.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			linkgc = await haruka.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			haruka.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'tagall':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += `‚û∏ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateSubject(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateDescription(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Example : .${command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await haruka.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'setppbott':
				if (!isOwner) return reply('*Only Owner bot*')
					haruka.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await haruka.downloadAndSaveMediaMessage(enmedia)
					await haruka.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break
					case 'bc': 
					if (!isOwner) return reply(lang.owner(botname)) 
					if (args.length < 1) return reply('.......')
					anu = await haruka.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await haruka.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							haruka.sendMessage(_.jid, buffer, image, {caption: `* PESAN BROADCAST *\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `* BROADCAST *\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
case 'bc2': 
					if (!isOwner) return reply(lang.owner(botname)) 
					if (args.length < 1) return reply('.......')
					anu = await haruka.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await haruka.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							haruka.sendMessage(_.jid, bc, image, {quoted:mek,caption: `* PESAN SIARAN BOT *\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
haruka.sendMessage(_.jid, 
			{"contentText": `* BROADCAST ${namabot} *\n\n${body.slice(5)}`,
			"footerText": '©APRILIA',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
					case 'block':
				 haruka.updatePresence(from, Presence.composing) 
				 haruka.chatRead (from)
					if (!isGroup) return reply(lang.group())
					if (!isOwner) return reply(lang.owner(botname))
					haruka.blockUser (`${body.slice(7)}@c.us`, "add")
					haruka.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(lang.group())
					if (!isOwner) return reply(lang.owner(botname))
				    haruka.blockUser (`${body.slice(9)}@c.us`, "remove")
					haruka.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
case 'nightcore':{
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await haruka.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											haruka.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'ssweb':  
                   if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                   if (args.length < 1) return reply(`[] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(lang.wait())
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   haruka.sendMessage(from, anu, image, {caption: `BERHASIL KAK`, quoted: fgif})
                   break
case 'infogempa':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
haruka.sendMessage(from, buffer, image, {quoted: fgif, caption: aku})
break
case 'upswteks':
            if (!q) return reply('Isi teksnya!')
            haruka.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await haruka.downloadMediaMessage(swsw)
            haruka.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            haruka.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await haruka.downloadMediaMessage(swsw)
            haruka.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            haruka.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('reply videonya!')
            }
            break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await haruka.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					haruka.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
case 'playstore':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '``` Play Store ```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
reply(teks)
})
break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '\n'
					for (let Y of res.data) {
					teks += `\n* _BRAINLY_ *\n\n* Pertanyaan:* ${Y.pertanyaan}\n\n* Jawaban:* ${Y.jawaban[0].text}\n\n`
					}
					haruka.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
break		
case 'searchgc':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '``` Search Group ```'
for (let i of res) {
teks += `\n\nï> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
haruka.sendMessage(from, teks, text,{quoted:fgif})
})
break
        case 'surah':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '``` AL-QURAN ```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*ï> Arab :* ' + i.arab + '\n'
teks += '*ï> Indo :* ' + i.indo + '\n'
teks += '*ï> Latin :* ' + i.latin + '\n\n'
}
haruka.sendMessage(from, teks, text,{quoted:fgif})
})
break
		default:
if (budy.startsWith('>')){
try {
	if (!isOwner) return reply(lang.owner(botname))
return haruka.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!isOwner) return reply(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`HarukaBot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!isOwner) return reply(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}                           
           	            }   
 //gua enc, biar nanti bisa di jual klo dah bnyk fimtur
function _0x5b43(_0x13cb2b,_0xe199d2){const _0x305ccd=_0x305c();return _0x5b43=function(_0x5b4386,_0x399037){_0x5b4386=_0x5b4386-0x98;let _0x129017=_0x305ccd[_0x5b4386];return _0x129017;},_0x5b43(_0x13cb2b,_0xe199d2);}const _0x301b28=_0x5b43;(function(_0x4b69f3,_0x173912){const _0x4bcf0a=_0x5b43,_0x5359a5=_0x4b69f3();while(!![]){try{const _0x34b6db=parseInt(_0x4bcf0a(0xbd))/0x1+parseInt(_0x4bcf0a(0xf7))/0x2*(-parseInt(_0x4bcf0a(0x110))/0x3)+parseInt(_0x4bcf0a(0x13f))/0x4*(parseInt(_0x4bcf0a(0x9d))/0x5)+-parseInt(_0x4bcf0a(0xf0))/0x6*(-parseInt(_0x4bcf0a(0xaf))/0x7)+parseInt(_0x4bcf0a(0xb6))/0x8*(parseInt(_0x4bcf0a(0x11b))/0x9)+-parseInt(_0x4bcf0a(0x138))/0xa+-parseInt(_0x4bcf0a(0xca))/0xb;if(_0x34b6db===_0x173912)break;else _0x5359a5['push'](_0x5359a5['shift']());}catch(_0x1b9376){_0x5359a5['push'](_0x5359a5['shift']());}}}(_0x305c,0xdb4aa));switch(command){case _0x301b28(0x13b):case'fb':case _0x301b28(0xf4):case _0x301b28(0xf1):{if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),'Klik\x20Button\x20Untuk\x20Verify',[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!q)return reply(_0x301b28(0x9f)+(prefix+command)+_0x301b28(0x142));if(!q['includes'](_0x301b28(0xd4)))return reply(_0x301b28(0x13c));await reply(lang[_0x301b28(0x14a)]());const API_GUEST=_0x301b28(0xa2),API_TIMELINE=_0x301b28(0x113),AUTH=_0x301b28(0x100),UserAgent=()=>{const _0x41d036=_0x301b28,_0x47122a=[_0x41d036(0xe7),_0x41d036(0xe1),_0x41d036(0xb9),_0x41d036(0x125),_0x41d036(0xb4),_0x41d036(0x13a),_0x41d036(0x121),_0x41d036(0xda),_0x41d036(0xd7),_0x41d036(0xab),_0x41d036(0xe4),'Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/77.0.3865.120\x20Safari/537.36',_0x41d036(0xc5),_0x41d036(0x12b),_0x41d036(0x11d),_0x41d036(0x106),_0x41d036(0xc9),_0x41d036(0x10e),_0x41d036(0xb5),_0x41d036(0x109),_0x41d036(0x149),_0x41d036(0xe8),_0x41d036(0x13e),_0x41d036(0xe7),_0x41d036(0xe1),'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_11_6)\x20AppleWebKit/601.7.7\x20(KHTML,\x20like\x20Gecko)\x20Version/9.1.2\x20Safari/601.7.7',_0x41d036(0xde)],_0xf6f553=_0x47122a[~~(Math['random']()*_0x47122a[_0x41d036(0xd1)])];return _0xf6f553;},getID=_0x182ecc=>{const _0x5e2549=_0x301b28;let _0x246821=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x574bf7=_0x246821[_0x5e2549(0x115)](_0x182ecc);return _0x574bf7&&_0x574bf7[0x1];},getInfo=async function(_0x330500){const _0x5610fa=_0x301b28,_0x11fd95=getID(_0x330500);if(_0x11fd95){let _0x4917cf;try{const _0x379954=await getToken();_0x4917cf=_0x379954[_0x5610fa(0xd8)];}catch(_0x41bb21){throw new Error(_0x41bb21);}const _0x167d8e=await axios[_0x5610fa(0xe6)](Util[_0x5610fa(0xdc)](API_TIMELINE,_0x11fd95),{'headers':{'x-guest-token':_0x4917cf,'authorization':AUTH}});if(!_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0x98)])throw new Error('No\x20media');const _0x2de451=_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)]['tweets'][_0x11fd95][_0x5610fa(0x98)][_0x5610fa(0xbc)];if(_0x2de451[0x0]['type']===_0x5610fa(0xaa))return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)]['globalObjects']['tweets'][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[0x0][_0x5610fa(0x145)][_0x5610fa(0xbe)]};if(_0x2de451[0x0][_0x5610fa(0x114)]===_0x5610fa(0x135))return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[_0x5610fa(0xe3)](_0x5d16ba=>_0x5d16ba[_0x5610fa(0xb1)])};if(_0x2de451[0x0][_0x5610fa(0x114)]==='animated_gif')return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[0x0][_0x5610fa(0x145)]['variants']};}else throw new Error(_0x5610fa(0xc7));};async function getToken(){const _0xed890a=_0x301b28;try{const _0xa35a77=await axios[_0xed890a(0xfc)](API_GUEST,null,{'headers':{'authorization':AUTH}});if(_0xa35a77[_0xed890a(0xfa)]===0xc8&&_0xa35a77[_0xed890a(0xa8)])return _0xa35a77[_0xed890a(0xa8)];}catch(_0x48bcd6){throw new Error(_0x48bcd6);}}const fbdl=async _0x51e767=>{async function _0x2fbba1(){const _0x476985=_0x5b43;let _0x5dc264=UserAgent();const _0x2b4732=await axios['get']('https://downvideo.net',{'headers':{'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','accept-language':_0x476985(0x12c),'sec-fetch-user':'?1','User-Agent':_0x5dc264}}),_0x3659c7=cheerio[_0x476985(0xcf)](_0x2b4732['data']);let _0x88d8d0;return _0x3659c7(_0x476985(0xbf))[_0x476985(0x120)](_0x476985(0xc2))[_0x476985(0xcd)]((_0x93f069,_0x7ed67c)=>{const _0x44f3e4=_0x476985;let _0x1da41a=_0x3659c7(_0x7ed67c)[_0x44f3e4(0x139)](_0x44f3e4(0xf8));_0x1da41a&&(_0x88d8d0=_0x1da41a);}),{'ua':_0x5dc264,'token':_0x88d8d0};}async function _0x16bdda(_0x2aaf95,_0x859e70){const _0x599d35=_0x5b43,_0x2916dd=await axios({'url':_0x599d35(0xd2),'method':_0x599d35(0x9b),'data':new URLSearchParams(Object['entries'](_0x2aaf95)),'headers':{'accept':_0x599d35(0x9e),'accept-language':_0x599d35(0x12c),'sec-fetch-user':'?1','content-type':_0x599d35(0x12f),'User-Agent':_0x859e70}}),_0x5ad314=cheerio['load'](_0x2916dd[_0x599d35(0xa8)]);let _0x2656ec=[];return _0x5ad314(_0x599d35(0x123))['find']('a')['each']((_0xd071d3,_0x97c2ac)=>{const _0xa1566d=_0x599d35;let _0x4a96c4=_0x5ad314(_0x97c2ac)[_0xa1566d(0x139)](_0xa1566d(0x126)),_0xce19ee=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0xce19ee[_0xa1566d(0xb8)](_0x4a96c4)&&_0x2656ec[_0xa1566d(0xfe)](_0x4a96c4);}),_0x2656ec;}const _0x534ea4=await _0x2fbba1();let _0x3e4475={'URL':_0x51e767,'token':_0x534ea4['token']};const _0x544b08=await _0x16bdda(_0x3e4475,_0x534ea4['ua']);return _0x544b08;};try{zee[_0x301b28(0x101)](''+q)[_0x301b28(0xf5)](async _0x2128ec=>{const _0x48828b=_0x301b28;let _0xea3dc6='*----„Äå\x20FACEBOOK\x20DOWNLOADER\x20„Äç----*\x0a\x0a';_0xea3dc6+=_0x48828b(0xb0)+_0x2128ec[_0x48828b(0xed)]+'\x0a',_0xea3dc6+='*‚Ä¢\x20Type\x20:*\x20'+_0x2128ec[_0x48828b(0x128)][0x0]['extension']+'\x0a',_0xea3dc6+=_0x48828b(0xc6)+_0x2128ec[_0x48828b(0x128)][0x0]['quality']+'\x0a',_0xea3dc6+=_0x48828b(0xdd)+_0x2128ec[_0x48828b(0x128)][0x1][_0x48828b(0xea)]+'\x0a',_0xea3dc6+=_0x48828b(0x10f)+_0x2128ec[_0x48828b(0x107)];let _0x22edcd=await getBuffer(_0x2128ec[_0x48828b(0x128)][0x1][_0x48828b(0x107)]);haruka[_0x48828b(0xdf)](from,_0x22edcd,video,{'mimetype':_0x48828b(0xa1),'quoted':mek,'caption':_0xea3dc6});});}catch{fbdl(''+q)[_0x301b28(0xf5)](_0x272992=>{sendFileFromUrl(from,_0x272992[0x0],'Done',mek);});}}break;case _0x301b28(0xae):if(!isHaruka)return sendButMessage(from,lang['noregis'](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!q)return reply(_0x301b28(0x9f)+(prefix+command)+_0x301b28(0x131));if(!q[_0x301b28(0x119)](_0x301b28(0x134)))return reply(_0x301b28(0x112));await reply(lang[_0x301b28(0x14a)]()),zee[_0x301b28(0x117)](''+q)[_0x301b28(0xf5)](async _0x9bd10d=>{const _0x206a1b=_0x301b28;let _0x5813da=_0x206a1b(0xeb);_0x5813da+=_0x206a1b(0xb0)+_0x9bd10d[_0x206a1b(0xed)]+'\x0a',_0x5813da+=_0x206a1b(0x136)+_0x9bd10d[_0x206a1b(0x118)]+'\x0a',_0x5813da+=_0x206a1b(0xc6)+_0x9bd10d[_0x206a1b(0x128)][0x1][_0x206a1b(0x14b)]+'\x0a',_0x5813da+='*‚Ä¢\x20Ext\x20:*\x20'+_0x9bd10d['medias'][0x0][_0x206a1b(0xdb)]+'\x0a',_0x5813da+=_0x206a1b(0xd5)+_0x9bd10d['medias'][0x0][_0x206a1b(0xea)]+'\x0a',_0x5813da+='*‚Ä¢\x20Url\x20\x20:*\x20'+_0x9bd10d[_0x206a1b(0x107)]+'\x0a\x0a',_0x5813da+=_0x206a1b(0xf2),sendFileFromUrl(from,_0x9bd10d[_0x206a1b(0x11c)],_0x5813da,mek),haruka[_0x206a1b(0xdf)](from,await getBuffer(_0x9bd10d[_0x206a1b(0x128)][0x0]['url']),audio,{'quoted':mek,'mimetype':_0x206a1b(0xd0)});});break;case'telesticker':case _0x301b28(0x103):{if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!isGroup)return reply(lang[_0x301b28(0xce)]());if(!q)return reply(_0x301b28(0x144)+(prefix+command)+'\x20*https://t.me/addstickers/geestickerpack*');if(!q['includes'](_0x301b28(0x143)))return reply(_0x301b28(0xee));var telestc=await zee[_0x301b28(0x11e)](''+q);await reply(lang[_0x301b28(0x14a)]());for(let i=0x0;i<(telestc[_0x301b28(0xd1)]<0xa?telestc[_0x301b28(0xd1)]:0xa);i++){haruka[_0x301b28(0xdf)](from,await getBuffer(telestc[i][_0x301b28(0x107)]),sticker,{'mimetype':_0x301b28(0xa4),'quoted':mek});}}break;case _0x301b28(0x132):if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),'Klik\x20Button\x20Untuk\x20Verify',[{'buttonId':'.daftar','buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!isGroup)return reply(lang[_0x301b28(0xce)]());if(tebakgambar[_0x301b28(0xe9)](sender[_0x301b28(0x122)]('@')[0x0]))return reply(_0x301b28(0xa9));hx[_0x301b28(0x132)]()['then'](async _0x3ebd44=>{const _0x139e6f=_0x301b28;tebakya=await getBuffer(_0x3ebd44[0x0]['image']),jawaban=''+_0x3ebd44[0x0][_0x139e6f(0xa0)][_0x139e6f(0x12a)]('Jawaban\x20',''),tebakgambar[sender[_0x139e6f(0x122)]('@')[0x0]]=jawaban[_0x139e6f(0x10a)](),fs[_0x139e6f(0x11f)](_0x139e6f(0x116),JSON[_0x139e6f(0xb7)](tebakgambar)),console[_0x139e6f(0x10b)](jawaban),haruka[_0x139e6f(0xdf)](from,tebakya,image,{'quoted':mek,'caption':_0x139e6f(0xf6)}),await sleep(0x1d4c0),tebakgambar['hasOwnProperty'](sender[_0x139e6f(0x122)]('@')[0x0])&&(haruka[_0x139e6f(0xdf)](from,_0x139e6f(0x12e)+'\x0a\x0a'+_0x139e6f(0xfd)+'\x0a'+'_'+jawaban+'_',text,{'quoted':mek}),delete tebakgambar[sender[_0x139e6f(0x122)]('@')[0x0]],fs['writeFileSync'](_0x139e6f(0x116),JSON['stringify'](tebakgambar)));});break;case _0x301b28(0x11a):case _0x301b28(0xc3):if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':'Daftar'},'type':0x1}],{'quoted':fgif});if(!isGroup)return reply(lang[_0x301b28(0xce)]());if(!q)return reply(_0x301b28(0xd6));qes=args[_0x301b28(0xb2)]('\x20'),reply(lang[_0x301b28(0x14a)]()),emoji[_0x301b28(0xe6)](''+qes)['then'](async _0xced70e=>{const _0x23f196=_0x301b28;teks=''+_0xced70e[_0x23f196(0x104)][0x4][_0x23f196(0x107)],console[_0x23f196(0x10b)](teks),sendStickerFromUrl(from,''+teks);});break;case _0x301b28(0xb3):{if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':'.daftar','buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(args[_0x301b28(0xd1)]===0x0)return reply(_0x301b28(0xd9)+prefix+_0x301b28(0x146));if(!isUrl(args[0x0])&&!args[0x0][_0x301b28(0x119)]('youtu'))return reply(_0x301b28(0x148));var mulaikah=args[_0x301b28(0xb2)]('\x20');await reply(lang['wait']());function ytMp3(_0x272440){return new Promise((_0x18300f,_0x426841)=>{const _0x19a4a7=_0x5b43;ytdl[_0x19a4a7(0xe0)](_0x272440)[_0x19a4a7(0xf5)](async _0x13e7cb=>{const _0x5bc793=_0x19a4a7;let _0x2c3080=[];for(let _0x52d0a7=0x0;_0x52d0a7<_0x13e7cb[_0x5bc793(0x9a)][_0x5bc793(0xd1)];_0x52d0a7++){let _0xae4355=_0x13e7cb[_0x5bc793(0x9a)][_0x52d0a7];if(_0xae4355[_0x5bc793(0xcb)]==_0x5bc793(0xef)){let {contentLength:_0x4dc463}=_0xae4355,_0x180cf6=await bytesToSize(_0x4dc463);_0x2c3080[_0x52d0a7]={'audio':_0xae4355[_0x5bc793(0x107)],'size':_0x180cf6};};};let _0x202116=_0x2c3080['filter'](_0x266beb=>_0x266beb['audio']!=undefined&&_0x266beb[_0x5bc793(0xe5)]!=undefined),_0x53333b=await axios[_0x5bc793(0xe6)](_0x5bc793(0xe2)+_0x202116[0x0][_0x5bc793(0x133)]),_0x541338=_0x53333b[_0x5bc793(0xa8)],_0x2a5712=_0x13e7cb['videoDetails']['title'],_0x5a82b7=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0x147)],_0x36cf9c=_0x13e7cb['videoDetails'][_0x5bc793(0xf3)],_0xc2922e=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0xad)],_0x3bc0c2=_0x13e7cb['videoDetails'][_0x5bc793(0x10c)],_0x479ef1=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0x127)],_0x380f66=_0x13e7cb['videoDetails']['uploadDate'],_0x4a71be=_0x13e7cb[_0x5bc793(0xec)][_0x5bc793(0xcc)][_0x5bc793(0x105)][_0x5bc793(0x11c)][_0x5bc793(0xfb)][0x0]['url'];_0x18300f({'title':_0x2a5712,'result':_0x541338,'size':_0x202116[0x0][_0x5bc793(0xe5)],'thumb':_0x4a71be,'views':_0x36cf9c,'likes':_0xc2922e,'dislike':_0x3bc0c2,'channel':_0x479ef1,'uploadDate':_0x380f66,'desc':_0x5a82b7});})[_0x19a4a7(0x10d)](_0x426841);});}ytMp3(''+mulaikah)['then'](async _0x742ee4=>{const _0x3eadc1=_0x301b28;let _0x22bcc7=_0x3eadc1(0xf9)+_0x742ee4[_0x3eadc1(0xed)]+_0x3eadc1(0x12d)+_0x742ee4['quality']+_0x3eadc1(0xa3)+_0x742ee4[_0x3eadc1(0xe5)]+_0x3eadc1(0x108)+_0x742ee4[_0x3eadc1(0x13d)]+_0x3eadc1(0xff)+_0x742ee4[_0x3eadc1(0xad)]+_0x3eadc1(0x140)+_0x742ee4[_0x3eadc1(0xa7)]+_0x3eadc1(0xac)+_0x742ee4[_0x3eadc1(0xc4)]+_0x3eadc1(0xc1)+_0x742ee4[_0x3eadc1(0x111)]+'\x0a*‚Ä¢\x20Url\x20:*\x20'+q;sendFileFromUrl(from,_0x742ee4[_0x3eadc1(0xc0)],_0x22bcc7,mek),sendFileFromUrl(from,_0x742ee4[_0x3eadc1(0x124)],'',mek);});}break;case _0x301b28(0x130):{if(!isHaruka)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':'Daftar'},'type':0x1}],{'quoted':fgif});if(args['length']===0x0)return reply('Kirim\x20perintah\x20*'+prefix+'ytmp3*\x20_Url\x20YouTube_');if(!isUrl(args[0x0])&&!args[0x0][_0x301b28(0x119)](_0x301b28(0x9c)))return reply('Link\x20tidak\x20valid!');var mulaikah=args[_0x301b28(0xb2)]('\x20');function ytMp4(_0x361138){return new Promise(async(_0x182e43,_0x2a9d1b)=>{const _0x2e537c=_0x5b43;ytdl['getInfo'](_0x361138)[_0x2e537c(0xf5)](async _0x52b862=>{const _0x2dc10f=_0x2e537c;let _0x4d681b=[];for(let _0x3cf02d=0x0;_0x3cf02d<_0x52b862[_0x2dc10f(0x9a)][_0x2dc10f(0xd1)];_0x3cf02d++){let _0x51515e=_0x52b862[_0x2dc10f(0x9a)][_0x3cf02d];if(_0x51515e[_0x2dc10f(0xc8)]=='mp4'&&_0x51515e['hasVideo']==!![]&&_0x51515e['hasAudio']==!![]){let {qualityLabel:_0xee6e82,contentLength:_0x26f862}=_0x51515e,_0x5d2f72=await bytesToSize(_0x26f862);_0x4d681b[_0x3cf02d]={'video':_0x51515e[_0x2dc10f(0x107)],'quality':_0xee6e82,'size':_0x5d2f72};};};let _0x54a725=_0x4d681b[_0x2dc10f(0x102)](_0x4f3ec5=>_0x4f3ec5['video']!=undefined&&_0x4f3ec5[_0x2dc10f(0xe5)]!=undefined&&_0x4f3ec5[_0x2dc10f(0x14b)]!=undefined),_0xd5bf80=await axios[_0x2dc10f(0xe6)]('https://tinyurl.com/api-create.php?url='+_0x54a725[0x0]['video']),_0x302b1b=_0xd5bf80['data'],_0x585643=_0x52b862['videoDetails']['title'],_0x3142b6=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x147)],_0x43e609=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0xf3)],_0x4de9c0=_0x52b862['videoDetails'][_0x2dc10f(0xad)],_0x5efd62=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x10c)],_0x1125e0=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x127)],_0x7d0c49=_0x52b862['videoDetails'][_0x2dc10f(0x111)],_0x5476eb=_0x52b862[_0x2dc10f(0xec)][_0x2dc10f(0xcc)][_0x2dc10f(0x105)][_0x2dc10f(0x11c)]['thumbnails'][0x0][_0x2dc10f(0x107)];_0x182e43({'title':_0x585643,'result':_0x302b1b,'quality':_0x54a725[0x0][_0x2dc10f(0x14b)],'size':_0x54a725[0x0][_0x2dc10f(0xe5)],'thumb':_0x5476eb,'views':_0x43e609,'likes':_0x4de9c0,'dislike':_0x5efd62,'channel':_0x1125e0,'uploadDate':_0x7d0c49,'desc':_0x3142b6});})[_0x2e537c(0x10d)](_0x2a9d1b);});};ytMp4(''+mulaikah)[_0x301b28(0xf5)](async _0x3d28bf=>{const _0x5daf7d=_0x301b28;let _0x21a5f2='*----„Äå\x20YOUTUBE\x20VIDEO\x20„Äç----*\x0a\x0a*‚Ä¢\x20Title\x20:*\x20'+_0x3d28bf[_0x5daf7d(0xed)]+_0x5daf7d(0x12d)+_0x3d28bf[_0x5daf7d(0x14b)]+_0x5daf7d(0xa3)+_0x3d28bf[_0x5daf7d(0xe5)]+_0x5daf7d(0x108)+_0x3d28bf[_0x5daf7d(0x13d)]+_0x5daf7d(0xff)+_0x3d28bf[_0x5daf7d(0xad)]+'\x0a*‚Ä¢\x20Dislikes\x20:*\x20'+_0x3d28bf[_0x5daf7d(0xa7)]+_0x5daf7d(0xac)+_0x3d28bf[_0x5daf7d(0xc4)]+'\x0a*‚Ä¢\x20Upload\x20:*\x20'+_0x3d28bf[_0x5daf7d(0x111)]+_0x5daf7d(0x129)+q;sendFileFromUrl(from,_0x3d28bf[_0x5daf7d(0xc0)],_0x21a5f2,mek),sendFileFromUrl(from,_0x3d28bf[_0x5daf7d(0x124)],'',mek);});}break;}function _0x305c(){const _0x3e8780=['1132KeWjMH','\x0a*‚Ä¢\x20Dislikes\x20:*\x20','Klik\x20Button\x20Untuk\x20Verify','\x20link\x20Facebook','t.me','Contoh:\x20','video_info','ytmp3*\x20_Url\x20YouTube_','description','Link\x20tidak\x20valid!','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64;\x20rv:68.0)\x20Gecko/20100101\x20Firefox/68.0','wait','quality','extended_entities','noregis','formats','POST','youtu','13535KsQTKc','text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Example\x20:\x20','jawaban','video/mp4','https://api.twitter.com/1.1/guest/activate.json','\x0a*‚Ä¢\x20Size\x20:*\x20','image/webp','globalObjects','tweets','dislike','data','Masih\x20ada\x20permainan\x20yang\x20sedang\x20berlangsung','video','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64;\x20rv:45.0)\x20Gecko/20100101\x20Firefox/45.0','\x0a*‚Ä¢\x20Channel\x20:*\x20','likes','soundcloud','7nqcKkB','*‚Ä¢\x20Title\x20:*\x20','media_url_https','join','ytmp3','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/79.0.3945.88\x20Safari/537.36','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/92.0.4515.107\x20Safari/537.36','273264ahOMwm','stringify','test','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/69.0.3497.100\x20Safari/537.36','Daftar','full_text','media','704812pNeLrk','variants','div[class=\x22input-group\x20col-lg-9\x22]','thumb','\x0a*‚Ä¢\x20Upload\x20:*\x20','input','emoji','channel','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/85.0.4183.121\x20Safari/537.36','*‚Ä¢\x20Quality\x20:*\x20','Not\x20a\x20Twitter\x20URL','container','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/69.0.3497.92\x20Safari/537.36','4133140jKmHDB','mimeType','microformat','each','group','load','audio/mp4','length','https://downvideo.net/download.php','videoDetails','facebook.com','*‚Ä¢\x20Size\x20:*\x20','emojinya?','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/52.0.2743.116\x20Safari/537.36\x20Edge/15.15063','guest_token','Kirim\x20perintah\x20*','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.93\x20Safari/537.36','extension','format','*‚Ä¢\x20Size\x20HD:*\x20','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_4)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/36.0.1985.125\x20Safari/537.36','sendMessage','getInfo','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10_5)\x20AppleWebKit/603.3.8\x20(KHTML,\x20like\x20Gecko)\x20Version/10.1.2\x20Safari/603.3.8','https://tinyurl.com/api-create.php?url=','map','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:47.0)\x20Gecko/20100101\x20Firefox/47.0','size','get','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_11_6)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/11.1.2\x20Safari/605.1.15','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_5)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/65.0.3325.181\x20Safari/537.36','hasOwnProperty','formattedSize','*----„Äå\x20SOUNDCLOUD\x20DOWNLOAD\x20„Äç----*\x0a\x0a','player_response','title','Bukan\x20link\x20telegram\x20stiker','audio/webm;\x20codecs=\x22opus\x22','4732230vuFXbB','facebookdl','*Mohon\x20tunggu\x20sebentar,\x20sedang\x20proses\x20pengiriman...*','viewCount','fbdl','then','\x0a\x0aTimeout\x20:\x20120.00\x20seconds','1089956pWGnAt','value','*----„Äå\x20YOUTUBE\x20AUDIO\x20„Äç----*\x0a\x0a*‚Ä¢\x20Title\x20:*\x20','status','thumbnails','post','*Jawaban\x20:*','push','\x0a*‚Ä¢\x20Likes\x20:*\x20','Bearer\x20AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA','Facebook','filter','tstiker','images','playerMicroformatRenderer','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10_5)\x20AppleWebKit/601.2.7\x20(KHTML,\x20like\x20Gecko)\x20Version/9.0.1\x20Safari/601.2.7','url','\x0a*‚Ä¢\x20Views\x20:*\x20','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:88.0)\x20Gecko/20100101\x20Firefox/88.0','toLowerCase','log','dislikes','catch','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/88.0.4324.104\x20Safari/537.36','*‚Ä¢\x20Url\x20:*\x20','3ImSjui','uploadDate','Itu\x20bukan\x20link\x20SoundCloud','https://api.twitter.com/2/timeline/conversation/%s.json?tweet_mode=extended','type','exec','./database/game/tebakgambar.json','SoundCloud','duration','includes','semoji','63KggNRC','thumbnail','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_5)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/67.0.3396.87\x20Safari/537.36','Telesticker','writeFileSync','find','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10;\x20rv:33.0)\x20Gecko/20100101\x20Firefox/33.0','split','div[class=\x22col-md-10\x22]','result','Mozilla/5.0\x20(X11;\x20Datanyze;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/65.0.3325.181\x20Safari/537.36','href','ownerChannelName','medias','\x0a*‚Ä¢\x20Url\x20:*\x20','replace','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:57.0)\x20Gecko/20100101\x20Firefox/57.0','id,en-US;q=0.9,en;q=0.8,es;q=0.7,ms;q=0.6','\x0a*‚Ä¢\x20Quality\x20:*\x20','Waktu\x20permainan\x20habis','application/x-www-form-urlencoded','ytmp4','\x20link\x20SoundCloud','tebakgambar','audio','m.soundcloud.com','photo','*‚Ä¢\x20Duration\x20:*\x20','.daftar','6797680fpFMMH','attr','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_3)\x20AppleWebKit/537.75.14\x20(KHTML,\x20like\x20Gecko)\x20Version/7.0.3\x20Safari/E7FBAF','facebook','Itu\x20bukan\x20link\x20Facebook','views','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010.11;\x20rv:47.0)\x20Gecko/20100101\x20Firefox/47.0'];_0x305c=function(){return _0x3e8780;};return _0x305c();}
		} catch (e) {
			haruka.sendMessage(`628811929177@s.whatsapp.net`, ` *ALERT-ERROR* \n\n\`\`\`${e}\`\`\`\n\n`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Loli-Script",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./settings/logo.jpg'),sourceUrl:"https://youtu.be/b-Rr0XCo7YU"}}})
		}
	})
	}
starts() 