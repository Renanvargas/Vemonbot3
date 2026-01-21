case 'menudono':
if (!isOwner) return reply('❌ Apenas o dono pode usar')

reply(`
╔═〘 👑 MENU DONO 〙═╗
║ 🤖 Bot: ${global.botname}
║ 👤 Dono: R.v Bot
╚══════════════════╝

⚙ CONTROLE
- reiniciar
- sair
- bc texto
- bcfoto
- setprefix -
- setnome nome
- setbio texto

🛡 GRUPOS
- entrar link
- sair
- listagp
- antifake on/off
- antispam on/off

📂 SISTEMA
- status
- limparmsg
- backup
`)
break
