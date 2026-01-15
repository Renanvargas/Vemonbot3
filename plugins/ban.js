const { isAdmin, isDono } = require('./_utils')

module.exports = {
  command: ['ban','kick'],
  async execute(sock, msg) {
    if (!await isAdmin(sock, msg) && !isDono(msg)) return

    const user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]
    if (!user) {
      return sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Marque alguém.'
      })
    }

    await sock.groupParticipantsUpdate(
      msg.key.remoteJid,
      [user],
      'remove'
    )
  }
}
