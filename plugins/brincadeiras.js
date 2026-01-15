module.exports = {
  command: ['brincadeiras','jogos'],
  async execute(sock, msg) {
    const texto = `
🎮 *BRINCADEIRAS*

• !piada
• !dado
• !caraoucoroa
• !roleta
• !casal
• !quiz
    `
    await sock.sendMessage(msg.key.remoteJid, { text: texto })
  }
}
