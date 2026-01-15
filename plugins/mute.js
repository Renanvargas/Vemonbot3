const { isAdmin, isDono } = require('./_utils')

module.exports = {
  command: ['mute'],
  async execute(sock, msg) {
    if (!await isAdmin(sock, msg) && !isDono(msg)) return

    await sock.groupSettingUpdate(
      msg.key.remoteJid,
      'announcement'
    )

    await sock.sendMessage(msg.key.remoteJid, {
      text: '🔇 Grupo mutado (somente admins).'
    })
  }
}
