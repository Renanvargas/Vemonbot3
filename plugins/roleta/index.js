module.exports = {
  name: 'roleta',
  commands: ['roleta'],

  async run(m, { reply }) {
    const tiro = Math.floor(Math.random() * 6)
    reply(tiro === 0
      ? '💥 BANG! Você morreu 😵'
      : '😅 Clique vazio… sobreviveu!'
    )
  }
}
