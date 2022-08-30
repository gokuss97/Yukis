module.exports = (client, message) => {
    if (message.author.bot) return;
    const prefix = '-';
    if (!message.content.startsWith(prefix)) return;
    
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
  if (!cmd) return
  if (cmd.inVoiceChannel && !message.member.voice.channel) {
    return message.channel.send(`Bạn phải ở trong kênh`)
  }
  try {
    cmd.run(client, message, args)
  } catch (e) {
    console.error(e)
    message.channel.send(`lỗi: \`${e}\``)
  }
}

