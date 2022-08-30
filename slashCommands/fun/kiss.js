const Math = require('mathjs');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kiss',
    description: 'Hôn một người nào đó',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Người mà bạn muốn hôn',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const personHugged = interaction.options.getUser('user') || interaction.mentions.username;
        images = [
            'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
            'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
            'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
            'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
            'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
            'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'

        ]
        if (personHugged) {
            const embed = new MessageEmbed()
            .setTitle(`Bạn đang hôn ${personHugged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            interaction.channel.send({ embeds: [embed] });
        }
        else {
            interaction.channel.send('Người này không có ở trong server')
        }


    }

}