case 'beijo':
if (!m.mentionedJid[0]) return reply('💋 Marque alguém')
reply(`💋 ${pushname} deu um beijo em @${m.mentionedJid[0].split('@')[0]}`)
break

case 'abraço':
if (!m.mentionedJid[0]) return reply('🤗 Marque alguém')
reply(`🤗 ${pushname} abraçou @${m.mentionedJid[0].split('@')[0]}`)
break

case 'casal':
let casal = participants.map(u => u.id)
let a = casal[Math.floor(Math.random()*casal.length)]
let b = casal[Math.floor(Math.random()*casal.length)]
reply(`💘 CASAL DO GRUPO:\n@${a.split('@')[0]} ❤️ @${b.split('@')[0]}`)
break

case 'gay':
if (!m.mentionedJid[0]) return reply('🏳️‍🌈 Marque alguém')
reply(`🏳️‍🌈 @${m.mentionedJid[0].split('@')[0]} é ${Math.floor(Math.random()*101)}% gay`)
break

case 'feio':
if (!m.mentionedJid[0]) return reply('😂 Marque alguém')
reply(`😂 @${m.mentionedJid[0].split('@')[0]} é ${Math.floor(Math.random()*101)}% feio`)
break

case 'lindo':
if (!m.mentionedJid[0]) return reply('😍 Marque alguém')
reply(`😍 @${m.mentionedJid[0].split('@')[0]} é ${Math.floor(Math.random()*101)}% lindo`)
break
