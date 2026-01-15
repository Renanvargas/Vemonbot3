module.exports = {
  command: ['dado'],
  async execute(sock, msg) {
    const n = Math.floor(Math.random() * 6) + 1
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🎲 O dado caiu em: *${n}*`
    })
  }
}
