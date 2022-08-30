const {Discord, MessageAttachment, Attachment} = require("discord.js");

module.exports = {
    name: 'edit', 
    category: 'Manager',
    run: (client, message, args) => {
    if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Bạn không có quyền để sử dụng lệnh này");

    switch(args[0]){
        case "text 1":
            const attachment = new MessageAttachment("A/0A.jpg")
            message.channel.send(message.author, attachment);
            break;
    }









    }}