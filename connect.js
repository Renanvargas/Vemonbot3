const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

const readline = require('readline')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  })

  // SE NÃO ESTIVER LOGADO, PEDE O NÚMERO
  if (!sock.authState.creds.registered) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question('📱 Digite o número com DDI (ex: 5532999999999): ', async (number) => {
      const code = await sock.requestPairingCode(number)
      console.log('🔐 Código de pareamento:', code)
      rl.close()
    })
  }

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      console.log('❌ Conexão fechada')
      startBot()
    } else if (connection === 'open') {
      console.log('✅ Bot conectado com sucesso!')
    }
  })
}

startBot()
