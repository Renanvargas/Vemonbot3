const verdade = [
  'Qual seu maior segredo?',
  'Já gostou de alguém do grupo?',
  'Qual seu maior medo?'
]

const desafio = [
  'Mande um áudio cantando 🎤',
  'Marque alguém 😂',
  'Envie um emoji aleatório'
]

module.exports = {
  name: 'verdade',
  commands: ['verdade', 'desafio'],

  async run(m, { reply }) {
    const tipo = Math.random() < 0.5 ? 'verdade' : 'desafio'
    const lista = tipo === 'verdade' ? verdade : desafio
    reply(`💣 *${tipo.toUpperCase()}*\n${lista[Math.floor(Math.random()*lista.length)]}`)
  }
}
