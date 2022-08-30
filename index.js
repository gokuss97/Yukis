
const { Client, Intents, Collection, Message } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const { DisTube } = require('distube')
const { SpotifyPlugin } = require("@distube/spotify")

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES ] });
client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();



['command', 'event', 'slashCommand' ].forEach(handler => require(`./handlers/${handler}`)(client)); //'slashCommand'



client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  leaveOnFinish: true,
  emitAddSongWhenCreatingQueue: false,
  plugins: [new SpotifyPlugin()]

});
module.exports = client;



client.discordTogether = new DiscordTogether(client);
client.on('message', async message => {
  if (message.content === 'start') {
      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, '868401810807881738').then(async invite => {
          return message.channel.send(`${invite.code}`);
      
          });
      };
  };
})

client.login(process.env.TOKEN);