const { MessageEmbed, MessageAttachment } = require('discord.js');


module.exports = {
    name: 'embed', 
    category: 'Manager',
    run: (client, message, args) => {
        if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Bạn không có quyền để sử dụng lệnh này");
        message.delete();
        const  roleID = "931573408028844092";
        const embed = new MessageEmbed()
    
            .setColor(0x0099FF)
            .setTitle('Anh thật sự rất muốn làm tình, đúng chứ? - Oneshot')
            .setURL('https://hentaivn.la/31626-doc-truyen-anh-that-su-rat-muon-lam-tinh-dung-chu.html')
            .setAuthor({ name: 'Hentai nhà làm'})
            .setDescription('Tag: Yandere, Full Color, Ahegao,...')
            .setThumbnail('https://img.upanh.tv/2022/08/26/user-270246.jpg')
            .addFields(
                { name: 'Tác giả', value: 'Hairaito' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Tras', value: 'Gokuss97', inline: true },
                { name: 'Edit', value: 'Gokuss97, Cyao Cat', inline: true },
            )            
            .setImage('https://img.upanh.tv/2022/08/26/01.jpg')
            .setTimestamp()
            message.channel.send({ embeds: [embed] });
            message.channel.send(`<@&${roleID}>`);



}}