case 'ban':
if (!isGroup) return reply('❌ Só grupo')
if (!isAdmin) return reply('❌ Só ADM')
if (!isBotAdmin) return reply('❌ Bot não é ADM')
if (!m.mentionedJid[0]) return reply('Marque alguém')
await conn.groupParticipantsUpdate(m.chat, [m.mentionedJid[0]], 'remove')
reply('✅ Usuário banido')
break

case 'mute':
if (!isAdmin) return reply('❌ Só ADM')
await conn.groupSettingUpdate(m.chat, 'announcement')
reply('🔇 Grupo mutado')
break

case 'unmute':
if (!isAdmin) return reply('❌ Só ADM')
await conn.groupSettingUpdate(m.chat, 'not_announcement')
reply('🔊 Grupo desmutado')
break
