import 'os';
import 'util';
import 'human-readable';
import '@realvare/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (_0x512ed3, { conn: _0x542b94, usedPrefix: _0x3f73c1 }) => {
  if (!_0x512ed3.quoted) return _0x542b94.sendMessage(_0x512ed3.chat, { text: '`[!] ERRORE: Rispondi a un messaggio per analizzare l\'hardware sorgente.`' }, { quoted: _0x512ed3 });

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
        'name': "🎰 SCANNER 888",
        'jpegThumbnail': await (await fetch("https://qu.ax/JKCXP.jpg")).buffer()
      }
    },
    'participant': "0@s.whatsapp.net"
  };

  const msgID = _0x512ed3.quoted.id || _0x512ed3.quoted.key?.id;
  const tagUtente = _0x5bfb0b.split('@')[0];
  let device = 'Sconosciuto 🕵️‍♂️';

  if (!msgID) {
    device = '⚠️ IMPOSSIBILE RILEVARE SORGENTE';
  } else if (/^[a-zA-Z]+-[a-fA-F0-9]+$/.test(msgID)) {
    device = '🤖 BOT / EMULATORE';
  } else if (msgID.startsWith('false_') || msgID.startsWith('true_')) {
    device = '💻 WHATSAPP WEB (Standard)';
  } else if (msgID.startsWith('3EB0')) {
    if (/^[A-Z0-9]+$/.test(msgID)) {
      device = '💻 WEB / BOT TERMINAL';
    } else {
      device = '🤖 ANDROID OS (Low Tier / Mod)';
    }
  } else if (msgID.includes(':')) {
    device = '🖥️ DESKTOP CLIENT (Multi-Device)';
  } else if (/^[A-F0-9]{32}$/i.test(msgID)) {
    device = '📱 ANDROID OS (Ufficiale)';
  } else if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(msgID)) {
    device = '🍏 IOS KERNEL (iPhone)';
  } else if (/^[A-Z0-9]{20,25}$/i.test(msgID)) {
    device = '🍏 IOS KERNEL (iPhone - High Tier)';
  } else {
    device = 'Sconosciuto 🕵️‍♂️';
    console.log(`[ANALISI] Nuovo ID rilevato e non indicizzato: ${msgID}`);
  }

  let _0x2aa101 = 
`╭━━━〔 🎰 *SCANNER DEVICE* 〕━━━┈
┃ *Bot:* 𝟴𝟴𝟴 𝗕𝗢𝗧
┃ *Categoria:* Utility & Controllo
┃━━━━━━━━━━━━━━━━━━
┃ 🔍 *Risultati Rilevamento:*
┃  ⮕ *Target:* @${tagUtente}
┃  ⮕ *Hardware:* \`${device}\`
┃ 
┃ ⚙️ *Stato Analisi:*
┃  ⮕ Completato 100%
┃  ⮕ Stringa ID: \`${msgID || 'N/D'}\`
╰━━━━━━━━━━━━━━━━━━┈
> ⚠️ In caso di bug o problemi tecnici, 
> utilizza il comando *${_0x3f73c1}ticket* per 
> segnalarlo subito allo staff.`.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101, mentions: [_0x5bfb0b] }, { quoted: _0x6bd16e });
};

handler.help = ['check', 'device', 'perquisizione'];  
handler.tags = ['giochi'];  
handler.command = /^(check|device|perquisizione|perqisizione)$/i; 
handler.group = true;
handler.admin = true;
handler.botAdmin = false;

export default handler;
