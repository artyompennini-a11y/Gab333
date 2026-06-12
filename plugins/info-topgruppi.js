import 'os';
import 'util';
import 'human-readable';
import '@realvare/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (_0x512ed3, { conn: _0x542b94, usedPrefix: _0x3f73c1 }) => {
  const { welcome: _0x16d809, detect: _0x4c3a9f } = global.db.data.chats[_0x512ed3.chat];
  let _0x5bfb0b = _0x512ed3.quoted ? _0x512ed3.quoted.sender : _0x512ed3.mentionedJid && _0x512ed3.mentionedJid[0] ? _0x512ed3.mentionedJid[0] : _0x512ed3.fromMe ? _0x542b94.user.jid : _0x512ed3.sender;
  const _0x197a8a = (await _0x542b94.profilePictureUrl(_0x5bfb0b, "image").catch(_0x2cb040 => null)) || "./src/avatar_contact.png";

  let _0x53e6f1;
  if (_0x197a8a !== "./src/avatar_contact.png") {
    _0x53e6f1 = await (await fetch(_0x197a8a)).buffer();
  } else {
    _0x53e6f1 = await (await fetch("https://qu.ax/DQsgr.png")).buffer();
  }

  let _0x6bd16e = {
    'key': {
      'participants': "0@s.whatsapp.net",
      'fromMe': false,
      'id': "Halo"
    },
    'message': {
      'locationMessage': {
        'name': "🎰 CLASSIFICHE 888",
        'jpegThumbnail': await (await fetch("https://qu.ax/JKCXP.jpg")).buffer()
      }
    },
    'participant': "0@s.whatsapp.net"
  };

  let chats = global.db.data.chats || {};

  let groups = Object.entries(chats)
    .filter(([jid]) => jid.endsWith('@g.us'))
    .map(([jid, data]) => {
      let total = data.totalmsg || 0;
      if (!total && data.topUsers) {
        total = Object.values(data.topUsers).reduce((sum, value) => sum + (value || 0), 0);
      }
      if (!total && data.users) {
        total = Object.values(data.users).reduce((sum, user) => sum + ((user?.messages || 0)), 0);
      }
      return { jid, total };
    });

  groups.sort((a, b) => b.total - a.total);
  let top10 = groups.slice(0, 10);
  const medals = ['🥇', '🥈', '🥉'];

  let _0x2aa101 = 
`╭━━━〔 🎰 *TOP 10 GRUPPI* 〕━━━┈
┃ *Bot:* 𝟴𝟴𝟴 𝗕𝗢𝗧
┃ *Categoria:* Classifiche & Statistiche
┃━━━━━━━━━━━━━━━━━━
┃ 📊 *Classifica Attività Gruppi:*
┃\n`;

  if (top10.length === 0) {
    _0x2aa101 += `┃  ❌ Nessun gruppo trovato\n`;
  } else {
    for (let i = 0; i < top10.length; i++) {
      let g = top10[i];
      let name = "Gruppo sconosciuto";

      try {
        const metadata = await _0x542b94.groupMetadata(g.jid);
        name = metadata.subject;
      } catch (e) {
        console.log("Errore gruppo:", g.jid);
      }

      if (name === "Gruppo sconosciuto") continue;

      let icon = medals[i] || '🔹';
      _0x2aa101 += `┃  ${icon} *${i + 1}°* ${name}\n┃  ⮕ 💬 ${g.total} messaggi\n┃\n`;
    }
  }

  _0x2aa101 += 
`╰━━━━━━━━━━━━━━━━━━┈
> ⚠️ In caso di bug o problemi tecnici, 
> utilizza il comando *${_0x3f73c1}ticket* per 
> segnalarlo subito allo staff.`.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, {
    text: _0x2aa101,
    contextInfo: {
      externalAdReply: {
        title: '🏆 TOP 10 GRUPPI',
        body: 'Entra nel canale di 𝟴𝟴𝟴 𝗕𝗢𝗧!',
        sourceUrl: 'https://whatsapp.com/channel/0029Vb7NyC67tkj0robcbw24',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: _0x6bd16e });
};

handler.command = /^topgruppi$/i;
handler.tags = ['info'];
handler.help = ['topgruppi'];

export default handler;
