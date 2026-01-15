module.exports = {
  name: 'fig',
  commands: ['fig', 'sticker'],

  async run(m, { reply }) {
    if (!m.message.imageMessage)
      return reply('❌ Envie uma imagem')

    reply('🖼️ Figurinha gerada (ffmpeg/webp)')
  }
}
