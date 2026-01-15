module.exports = {
  command: ['piada'],
  async execute(sock, msg) {
    const piadas = [
      'Por que o programador foi ao médico? Porque estava com bug 😂',
      'Qual o café favorito do dev? Java ☕',
      'Meu código funciona… não sei por quê 😎'
    ]
    const p = piadas[Math.floor(Math.random() * piadas.length)]
    await sock.sendMessage(msg.key.remoteJid, { text: p })
  }
}
