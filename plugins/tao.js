let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/taotao.mp3'
conn.sendFile(m.chat, vn, 'taotao.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Taotao|taotao|TaoTao/
handler.command = new RegExp
module.exports = handler