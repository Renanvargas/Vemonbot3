const dono = ['5532998665591']

module.exports = {
  command: ['dono','owner'],
  async execute(sock, msg) {
    const numero = msg.key.participant || msg.key.remoteJid
    const isDono = dono.some(v => numero.includes(v))

    if (!isDono) {
      return sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Apenas o DONO pode usar este comando.'
      })
    }

    const texto = `
👑 *MENU DO DONO*

• !reiniciar
• !status
• !ping
• !menu
    `
    await sock.sendMessage(msg.key.remoteJid, { text: texto })
  }
}
