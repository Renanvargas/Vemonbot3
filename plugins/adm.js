const { isAdmin, isDono } = require('./_utils')

module.exports = {
  command: ['adm'],
  async execute(sock, msg) {
    if (!await isAdmin(sock, msg) && !isDono(msg)) return

    await sock.sendMessage(msg.key.remoteJid, {
      text: `
👮 *MENU ADM*

• !ban @user
• !kick @user
• !mute
• !unmute
      `
    })
  }
}
