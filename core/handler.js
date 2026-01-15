const plugins = require('./plugins')

module.exports = async (sock, m) => {
  const text =
    m.message?.conversation ||
    m.message?.extendedTextMessage?.text ||
    ''

  const prefix = '!'
  if (!text.startsWith(prefix)) return

  const cmd = text.slice(1).split(' ')[0].toLowerCase()

  const plugin = plugins.find(p => p.commands.includes(cmd))
  if (!plugin) return

  plugin.run(m, {
    sock,
    reply: (t) =>
      sock.sendMessage(m.key.remoteJid, { text: t })
  })
}
