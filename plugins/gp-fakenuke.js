import fs from 'fs'

let handler = async (m, { conn, command }) => {
    const chat = global.db.data.chats[m.chat] || {}

    if (command === 'nuke') {
        const groupMetadata = await conn.groupMetadata(m.chat)

        chat.oldName = groupMetadata.subject
        chat.oldDesc = groupMetadata.desc || "Nessuna descrizione"
        global.db.data.chats[m.chat] = chat

        let newName = `☣️ 𝘚𝘠𝘚𝘛𝘌𝘔 𝘍𝘈𝘐𝘓𝘜𝘙𝘌 | ${chat.oldName}`

        await conn.groupUpdateSubject(m.chat, newName)

        await conn.groupUpdateDescription(
            m.chat,
            "⚡ 𝘾𝙊𝙉𝙏𝙍𝙊𝙇𝙇𝙊 𝘼𝘾𝙌𝙐𝙄𝙎𝙄𝙏𝙊 𝘿𝘼 𝟴𝟴𝟴 𝗕𝗢𝗧 ⚡"
        )

        await conn.groupSettingUpdate(m.chat, 'announcement')

        let code = await conn.groupInviteCode(m.chat)
        let link = `https://chat.whatsapp.com/${code}`

        const participants = groupMetadata.participants.map(u => u.id)

        await conn.sendMessage(
            m.chat,
            {
                video: fs.readFileSync('./media/fakenuke.mp4'),
                caption: "⚠️ *CRITICAL ERROR: NUKE IN CORSO...*"
            },
            { quoted: m }
        )

        await new Promise(r => setTimeout(r, 2000))

        let nukeMsg = `
⚡ ─── ╳ 𝟴𝟴𝟴 𝗕𝗢𝗧 ╳ ─── ⚡

☣️ *CHAT WIPED SUCCESSFULLY*
━━━━━━━━━━━━━━━━━━━━━━━━━━
↳ _Tutti i dati precedenti sono stati sovrascritti._

📢 *UNISCITI AL QUARTIER GENERALE:*
🔗 ${link}

⚠️ _System Hacked by 𝟴𝟴𝟴 𝗕𝗢𝗧_
━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()

        await conn.sendMessage(
            m.chat,
            {
                text: nukeMsg,
                mentions: participants
            },
            { quoted: m }
        )
    }

    if (command === 'resuscita') {
        if (!chat.oldName) {
            return m.reply("❌ *[ERROR]:* Nessun backup rilevato per questa chat.")
        }

        await conn.groupUpdateSubject(m.chat, chat.oldName)

        await conn.groupUpdateDescription(m.chat, chat.oldDesc)

        await conn.groupSettingUpdate(m.chat, 'not_announcement')

        let resMsg = `
🔄 *BACKUP RESTORE COMPLETE*
━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ _Nome e descrizione ripristinati._
🔓 _I canali di comunicazione sono di nuovo aperti._
━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()

        m.reply(resMsg)
    }
}

handler.help = ['nuke', 'resuscita']
handler.tags = ['group', 'owner']
handler.command = ['nuke', 'resuscita']

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
