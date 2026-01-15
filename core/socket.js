require('dotenv').config()
const { default: makeWASocket } = require('@whiskeysockets/baileys')
const handler = require('./handler')

async function start() {
  const sock = makeWASocket({
    printQRInTerminal: true,
    browser: ['Vemonbot3', 'Chrome', '1.0']
  })

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0]
    if (!m.message) return
    await handler(sock, m)
  })
}

start()
