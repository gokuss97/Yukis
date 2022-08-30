const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'text2',
    category: 'edit',
	run: async (client, message, args) => {
        if(!message.member.permissions.has("871692859663867904")) return message.channel.send("Bạn không có quyền dùng lênh này");
message.channel.send({
  files: [
    "A/1A.jpg",  ]
});
       
       
           }}
