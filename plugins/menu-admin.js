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
        'name': "👑 MENU ADMIN 888",
        'jpegThumbnail': await (await fetch("https://qu.ax/JKCXP.jpg")).buffer()
      }
    },
    'participant': "0@s.whatsapp.net"
  };

  let _0x2aa101 = 
`╭━━━〔 👑 *MENU ADMIN* 〕━━━┈
┃ *Bot:* 𝟴𝟴𝟴 𝗕𝗢𝗧
┃ *Livello:* Privilegi Amministratore
┃━━━━━━━━━━━━━━━━━━
┃ 👥 *Gestione Utenti:*
┃  ⮕ ${_0x3f73c1}promuovi / p
┃  ⮕ ${_0x3f73c1}retrocedi / r
┃  ⮕ ${_0x3f73c1}kick / puffo / sparisci
┃  ⮕ ${_0x3f73c1}inattivi
┃  ⮕ ${_0x3f73c1}invita
┃  ⮕ ${_0x3f73c1}richieste
┃ 
┃ ⚙️ *Impostazioni Gruppo:*
┃  ⮕ ${_0x3f73c1}aperto / apri
┃  ⮕ ${_0x3f73c1}chiuso / chiudi
┃  ⮕ ${_0x3f73c1}closetime (minuti)
┃  ⮕ ${_0x3f73c1}setwelcome
┃  ⮕ ${_0x3f73c1}setbye
┃  ⮕ ${_0x3f73c1}reimposta
┃  ⮕ ${_0x3f73c1}nome
┃  ⮕ ${_0x3f73c1}bio
┃ 
┃ 🛡️ *Controllo & Moderazione:*
┃  ⮕ ${_0x3f73c1}warn / unwarn
┃  ⮕ ${_0x3f73c1}unwarnlink
┃  ⮕ ${_0x3f73c1}muta (@)
┃  ⮕ ${_0x3f73c1}smuta (@)
┃  ⮕ ${_0x3f73c1}freezegp
┃  ⮕ ${_0x3f73c1}addparole
┃  ⮕ ${_0x3f73c1}listaparole
┃  ⮕ ${_0x3f73c1}delparole
┃ 
┃ 📢 *Menzioni & Tag:*
┃  ⮕ ${_0x3f73c1}hidetag / tag
┃  ⮕ ${_0x3f73c1}tagall
┃  ⮕ ${_0x3f73c1}admins
┃ 
┃ 🔧 *Strumenti & Utility:*
┃  ⮕ ${_0x3f73c1}pin
┃  ⮕ ${_0x3f73c1}unpin
┃  ⮕ ${_0x3f73c1}clear
┃  ⮕ ${_0x3f73c1}del
┃  ⮕ ${_0x3f73c1}s
┃  ⮕ ${_0x3f73c1}wm
┃  ⮕ ${_0x3f73c1}pfp @tag
┃ 
┃ 📊 *Info & Sistema:*
┃  ⮕ ${_0x3f73c1}infogruppo
┃  ⮕ ${_0x3f73c1}staff
┃  ⮕ ${_0x3f73c1}ping
┃  ⮕ ${_0x3f73c1}link / linkqr
┃  ⮕ ${_0x3f73c1}rules
┃  ⮕ ${_0x3f73c1}statsgiornaliere
┃  ⮕ ${_0x3f73c1}riassunto
┃  ⮕ ${_0x3f73c1}logadmin
┃  ⮕ ${_0x3f73c1}ticket
┃ 
┃ 🃏 *Fun & Mod:*
┃  ⮕ ${_0x3f73c1}addmod @user
┃  ⮕ ${_0x3f73c1}delmod @user
┃  ⮕ ${_0x3f73c1}mods
┃  ⮕ ${_0x3f73c1}arresta
┃  ⮕ ${_0x3f73c1}giuria
┃  ⮕ ${_0x3f73c1}simula
┃  ⮕ ${_0x3f73c1}fakenuke
┃  ⮕ ${_0x3f73c1}ds
╰━━━━━━━━━━━━━━━━━━┈
> ⚠️ In caso di bug o problemi tecnici, 
> utilizza il comando *${_0x3f73c1}ticket* per 
> segnalarlo subito allo staff.`.trim();

  _0x542b94.sendMessage(_0x512ed3.chat, { text: _0x2aa101 }, { quoted: _0x6bd16e });
};

handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(admin)$/i;

export default handler;
