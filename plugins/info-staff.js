let handler = async (m, { conn }) => {

  const text = `╭━━━〔 👑 *INFO STAFF* 〕━━━┈
┃ *Bot:* 𝟴𝟴𝟴 𝗕𝗢𝗧
┃ *Stato:* Staff Ufficiale
┃━━━━━━━━━━━━━━━━━━
┃ 👑 *OWNER:*
┃  • _The Punisher:_ wa.me/393206032199
┃ 
┃ 🔱 *CO-OWNER:*
┃  • _Elixir:_ wa.me/393784409415
┃━━━━━━━━━━━━━━━━━━
┃ 🌐 *LINK INSTAGRAM:*
┃  • _The Punisher:_ instagram.com/arty.340
┃  • _Elixir:_ instagram.com/eli.xir_ggt.me/ElixirKG
┃ 
┃ 📲 *CONTATTI TELEGRAM:*
┃  • _The Punisher:_ @punishth
┃  • _Elixir:_ @ElixirKG
╰━━━━━━━━━━━━━━━━━━┈`.trim()

  const mentions = [
    '393206032199@s.whatsapp.net',
    '393784409415@s.whatsapp.net'
  ]

  await conn.sendMessage(m.chat, {
    text,
    mentions,
    contextInfo: {
      externalAdReply: {
        title: 'STAFF 𝟴𝟴𝟴 𝗕𝗢𝗧',
        body: 'Entra nel canale ufficiale di 𝟴𝟴𝟴 𝗕𝗢𝗧!',
        sourceUrl: 'https://whatsapp.com/channel/0029Vb7NyC67tkj0robcbw24',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  m.react('👑')
}

handler.help = ['staff']
handler.tags = ['admin']
handler.command = ['staff']

export default handler
