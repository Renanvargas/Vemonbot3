module.exports = {
  command: ['utilidades'],
  async execute(sock, msg) {
    await sock.sendMessage(msg.key.remoteJid, {
      text: `
🧰 *UTILIDADES*
• !hora
• !data
• !ping
      `
    })
  }
}
