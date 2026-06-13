let handler = async (m, { conn }) => {
  const message = `*Per svuotare gruppi ci pensa The punisher, manda il link a me o a +7 952 493-13-64*`;

  await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.help = ['nukkare'];
handler.tags = ['giochi'];


handler.customPrefix = /nukkare/i; 
handler.command = new RegExp; 

export default handler;
