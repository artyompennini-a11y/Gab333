import { existsSync, promises as fsPromises } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {
      text: "*🚨 𝐔𝐭𝐢𝐥𝐢𝐳𝐳𝐢 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐫𝐞𝐭𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐧𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭.*"
    }, { quoted: m });
  }

  try {
    const sessionFolder = "./varesession/";

    if (!existsSync(sessionFolder)) {
      return await conn.sendMessage(m.chat, {
        text: "*❌ 𝐍𝐨𝐧 𝐜𝐢 𝐬𝐨𝐧𝐨 𝐡𝐚𝐧𝐝𝐢𝐜𝐚𝐩𝐩𝐚𝐭𝐢  o 𝐧𝐨𝐧 𝐞𝐬𝐢𝐬𝐭𝐨𝐧𝐨.*"
      }, { quoted: m });
    }

    const sessionFiles = await fsPromises.readdir(sessionFolder);
    let deletedCount = 0;

    for (const file of sessionFiles) {
      if (file !== "creds.json") {
        await fsPromises.unlink(path.join(sessionFolder, file));
        deletedCount++;
      }
    }

    const textMsg = deletedCount === 0 
      ? '❗ 𝐍𝐢𝐞𝐧𝐭𝐞 𝐡𝐚𝐧𝐝𝐢𝐜𝐚𝐩𝐩𝐚𝐭𝐢, 𝐫𝐢𝐩𝐫𝐨𝐯𝐚 𝐭𝐫𝐚 𝐩𝐨𝐜𝐨 𝐧𝐞 𝐡𝐨 𝐛𝐢𝐬𝐨𝐠𝐧𝐨 ‼️' 
      : '🔥🔫 𝐇𝐨 𝐬𝐩𝐚𝐰𝐧-𝐤𝐢𝐥𝐥𝐚𝐭𝐨 ' + deletedCount + ' 𝗲𝗯𝗿𝗲𝗶 !💀';

    await conn.sendMessage(m.chat, {
      text: textMsg,
      footer: "Seleziona un'opzione qui sotto 👇",
      buttons: [
        { buttonId: usedPrefix + "ds", buttonText: { displayText: "🔄 𝐒𝐯𝐮𝐨𝐭𝐚 𝐝𝐢 𝐧𝐮𝐨𝐯𝐨" }, type: 1 },
        { buttonId: usedPrefix + "ping", buttonText: { displayText: "📡 𝐏𝐢𝐧𝐠" }, type: 1 },
      ],
      headerType: 1
    }, { quoted: m });

  } catch (error) {
    await conn.sendMessage(m.chat, { text: "❌ 𝐄𝐫𝐫𝐨𝐫𝐞 𝐝𝐢 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐳𝐢𝐨𝐧𝐞!" }, { quoted: m });
  }
};

handler.help = ['del_reg_in_session_owner'];
handler.tags = ["owner"];
handler.command = /^(deletession|ds)$/i;
handler.admin = true;

export default handler;
