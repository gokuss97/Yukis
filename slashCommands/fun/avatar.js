const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Hiện avatar của onii-chan hoặc người khác',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Người Onii-chan muốn lấy avatar',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${user.tag} đây Onii-chan`);
        interaction.reply({ embeds: [embed] });
    },
};