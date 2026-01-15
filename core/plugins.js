const fs = require('fs')
const path = require('path')

const plugins = []
const dir = path.join(__dirname, '../plugins')

fs.readdirSync(dir).forEach(folder => {
  const file = path.join(dir, folder, 'index.js')
  if (fs.existsSync(file)) {
    plugins.push(require(file))
    console.log(`✅ Plugin carregado: ${folder}`)
  }
})

module.exports = plugins
