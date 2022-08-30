const Math = require('mathjs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    description: 'Ôm một người nào đó',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Người mà bạn muốn ôm',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const personHugged = interaction.options.getUser('user') || interaction.mentions.username;
        images = [
            "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
            "https://i.pinimg.com/originals/ff/95/42/ff9542a0943d49666130b026f82401fb.gif",
            "https://acegif.com/wp-content/gif/anime-hug-14.gif",
            "https://acegif.com/wp-content/gif/anime-hug-49.gif",

        ]
    
            const embed = new MessageEmbed()
            .setTitle(`Bạn đang ôm ${personHugged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            interaction.channel.send({ embeds: [embed] });
        }

    }

