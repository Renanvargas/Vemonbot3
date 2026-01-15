module.exports = {
  command: ['menu','ajuda'],
  async execute(sock, msg) {
    const texto = `
🤖 *VEMONBOT 3*

📌 MENUS
• !menu
• !brincadeiras
• !utilidades
• !figurinhas
• !info

👑 Dono: +5532998665591
    `
    await sock.sendMessage(msg.key.remoteJid, { text: texto })
  }
}
