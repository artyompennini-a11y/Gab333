import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false;

  
  if (!global.support) {
    global.support = {
      ffmpeg: true,
      ffprobe: true,
      ffmpegWebp: true,
      convert: true,
      magick: false,
      gm: false,
      find: false
    };
  }

  const packName = global.authsticker || '𝟴𝟴𝟴 𝗕𝗢𝗧';
  const authorName = global.nomepack || '𝟴𝟴𝟴 𝗕𝗢𝗧';

  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime) && (q.msg || q).seconds > 10) {
        return m.reply('『 ⏰ 』- `Il video deve durare meno di 10 secondi per creare uno sticker.`');
      }
      
      let img = await q.download?.();
      if (!img) return conn.reply(m.chat, '『 📸 』- `Per favore, invia un\'immagine, video o GIF per creare uno sticker.`', m);
      
      try {
        
        stiker = await sticker(img, false, packName, authorName);
      } catch (e) {
        console.error('『 ❌ 』- Creazione sticker diretta fallita, tento il caricamento:', e);
        try {
          let out;
          if (/video/g.test(mime)) {
            out = await uploadFile(img);
          } else {
            out = await uploadImage(img);
          }
          
          if (typeof out === 'string') {
            stiker = await sticker(false, out, packName, authorName);
          }
        } catch (uploadError) {
          console.error('『 ❌ 』- Caricamento e creazione sticker falliti:', uploadError);
          stiker = false;
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) {
        stiker = await sticker(false, args[0], packName, authorName);
      } else {
        return m.reply('『 🔗 』- `L\'URL fornito non è valido. Assicurati che sia un link diretto a un\'immagine.`');
      }
    }
  } catch (e) {
    console.error('『 ❌ 』- Errore generale nel gestore:', e);
    stiker = false;
  }

  
  if (stiker) {
    await conn.sendFile(
      m.chat,
      stiker,
      'sticker.webp',
      '『 ✅ 』- `Sticker creato con successo!`',
      m,
      false, // Modificato in false per evitare conflitti con l'invio asincrono se non supportato
      { quoted: m }
    );
  } else {
    return conn.reply(
      m.chat,
      '『 📱 』- `Rispondi a un\'immagine, video o GIF per creare uno sticker, oppure invia un URL di un\'immagine.`',
      m
    );
  }
};

handler.help = ['s', 'sticker', 'stiker'];
handler.tags = ['sticker', 'strumenti'];
handler.command = ['s', 'sticker', 'stiker'];
handler.register = false;

export default handler;

const isUrl = (text) => {
  return text.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|webp)/,
      'gi'
    )
  );
};
