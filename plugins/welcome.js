module.exports = {
  event: 'group-participants-update',
  async execute(sock, update) {
    const groupId = update.id
    const participants = update.participants
    const action = update.action // 'add' ou 'remove'

    // Pegar metadata do grupo
    const meta = await sock.groupMetadata(groupId)
    const groupName = meta.subject

    for (const user of participants) {
      const contact = user.includes('@s.whatsapp.net') ? user.split('@')[0] : user

      if (action === 'add') {
        await sock.sendMessage(groupId, {
          text: `👋 Olá @${contact}!\nSeja bem-vindo(a) ao grupo *${groupName}*!\nLeia as regras e divirta-se 😎`,
          mentions: [user]
        })
      } else if (action === 'remove') {
        await sock.sendMessage(groupId, {
          text: `😢 Adeus @${contact}!\nEsperamos te ver novamente!\nGrupo: *${groupName}*`,
          mentions: [user]
        })
      }
    }
  }
}
