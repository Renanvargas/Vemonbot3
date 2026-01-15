const { spawn } = require('child_process')

console.log('🔁 Start.js iniciado (Vemonbot3)')

function iniciar() {
  const bot = spawn('node', ['temux.js'], {
    stdio: 'inherit'
  })

  bot.on('close', (code) => {
    console.log(`⚠️ Bot caiu com código ${code}`)
    console.log('♻️ Reiniciando em 3 segundos...')
    setTimeout(iniciar, 3000)
  })
}

iniciar()
