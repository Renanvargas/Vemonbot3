const frases = [
  '😂 foi zoado(a) pelo Vemon!',
  '🤡 é o palhaço do grupo!',
  '😈 caiu na zoeira!',
  '🔥 foi escolhido!'
]

module.exports = {
  name: 'zoeira',
  commands: ['zoeira'],

  async run(m, { reply }) {
    if (!m.message.extendedTextMessage?.contextInfo?.mentionedJid)
      return reply('❌ Marque alguém!\nEx: !zoeira @user')

    const user = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
    reply(`🎉 @${user.split('@')[0]} ${frases[Math.floor(Math.random()*frases.length)]}`)
  }
}
