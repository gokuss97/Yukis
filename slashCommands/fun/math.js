const discord = require('discord.js')
const math = require('mathjs')

module.exports = {
name: 'math',
description: 'Dùng Shana để tính gì đó',
type: 'CHAT_INPUT',
options: [
    {
        name: 'query',
        description: 'Nhập phép toán bất kỳ',
        type: 'STRING',
        required: true,
    }
],
run: async (client, interaction) => { 
    var question = interaction.options.getString('query');
    interaction.reply({ content: 'Thao tác thành công!', ephemeral: true });
    if(!question) return interaction.channel.send('Vui lòng nhập số để tính')

    let result;
    try {
        result = math.evaluate(question);


    } catch (e) {
        return interaction.channel.send('Đưa số vô lý vkl')
    }


    return interaction.channel.send(`${question} = ${result}`)
}
};