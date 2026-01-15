module.exports = {
  command: ['caraoucoroa'],
  async execute(sock, msg) {
    const r = Math.random() < 0.5 ? '🪙 Cara' : '🪙 Coroa'
    await sock.sendMessage(msg.key.remoteJid, { text: r })
  }
}
