module.exports = {
  name: 'menu',
  commands: ['menu'],

  async run(m, { sock }) {
    await sock.sendMessage(m.key.remoteJid, {
      text: '😈 *VEMONBOT3 MENU*',
      buttons: [
        { buttonId: '!zoeira', buttonText: { displayText: '😂 Zoeira' }, type: 1 },
        { buttonId: '!roleta', buttonText: { displayText: '🤣 Roleta Russa' }, type: 1 },
        { buttonId: '!verdade', buttonText: { displayText: '💣 Verdade/Desafio' }, type: 1 },
        { buttonId: '!fig', buttonText: { displayText: '🖼️ Figurinha' }, type: 1 }
      ],
      headerType: 1
    })
  }
}
