const { isAdmin, isDono } = require('./_utils')

module.exports = {
  command: ['unmute'],
  async execute(sock, msg) {
    if (!await isAdmin(sock, msg) && !isDono(msg)) return

    await sock.groupSettingUpdate(
      msg.key.remoteJid,
      'not_announcement'
    )

    await sock.sendMessage(msg.key.remoteJid, {
      text: '🔊 Grupo liberado.'
    })
  }
}
