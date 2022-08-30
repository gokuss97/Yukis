const Discord = require("discord.js");

module.exports = {
    name: 'clear', 
    description: 'Xóa tin nhắn',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Nhập số lượng tin muốn xóa (nhớ +1 vd: muốn xóa là 6 thì nhập là 7)',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => { 
        interaction.reply({ content: 'Thao tác thành công!', ephemeral: true });
        const amount = interaction.options.getString('query');
    if(!interaction.member.permissions.has("868329213877420053")) return interaction.channel.send("Cậu không có sự cho phép của Gin.");
    if (!amount) return interaction.channel.send ('Xin hãy nhập số thoại Onii-chan muốn xóa');
    if (amount > 100 || amount < 1) return interaction.channel.send('Xin hãy nhập số từ 1 đến 100 Baka!');

    interaction.channel.bulkDelete(amount).catch(err => {
        interaction.channel.send ('Discord không cho phép em xóa tin nhắn hơn 14 ngày')
    })


}

}
