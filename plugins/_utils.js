const { dono } = require('./_config')

function getNumero(msg) {
  return (msg.key.participant || msg.key.remoteJid || '')
}

function isDono(msg) {
  const num = getNumero(msg)
  return dono.some(v => num.includes(v))
}

async function isAdmin(sock, msg) {
  if (!msg.key.remoteJid.endsWith('@g.us')) return false
  const meta = await sock.groupMetadata(msg.key.remoteJid)
  return meta.participants
    .filter(p => p.admin)
    .some(p => p.id === getNumero(msg))
}

module.exports = { isDono, isAdmin }
