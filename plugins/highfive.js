let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
await m.reply(global.wait)
  try {
  let res = await fetch('https://api.waifu.pics/sfw/highfive')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Highfive', 'Violet')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['highfive']
handler.tags = ['expression']
handler.command = /^hi(ghfive|5)|tos$/
handler.register = true
handler.limit = true

module.exports = handler
