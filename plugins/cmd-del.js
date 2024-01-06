//import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `✳️ Ingresa el nombre del Comando`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw `✳️ No puedes eliminar este comando`
    delete sticker[hash]
    m.reply(`✅ Comando Eliminado`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.owner = true

export default handler
