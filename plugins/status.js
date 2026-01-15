module.exports = {
  command: ['status'],
  async execute(sock, msg) {
    const uptime = process.uptime()
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🤖 Bot online\n⏱️ Uptime: ${Math.floor(uptime)}s`
    })
  }
}
