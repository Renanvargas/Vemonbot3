const dono = ['5532998665591']

module.exports = {
  command: ['reiniciar','restart'],
  async execute(sock, msg) {
    const numero = msg.key.participant || msg.key.remoteJid
    if (!dono.some(v => numero.includes(v))) return

    await sock.sendMessage(msg.key.remoteJid, {
      text: '♻️ Reiniciando o bot...'
    })
    process.exit()
  }
}
