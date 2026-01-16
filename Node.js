module.exports = {
  name: 'teste',                 // nome do plugin
  command: ['!teste'],           // comando que aciona o plugin
  execute(client, message) {     // função que roda ao usar o comando
    client.sendText(message.from, 'Bot funcionando ✅');
  }
};
