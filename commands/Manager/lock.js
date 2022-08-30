
const discord = require("discord.js")

module.exports = {
    name: 'lock',
    category: 'Manager',
    run: async (client, message, args) => {
        if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Cậu không có sự cho phép của Gin.");
        let msg = await message.channel.send("Loading...")

try {
    message.channel.permissionOverwrites.edit(
        message.author, 
        { SEND_MESSAGES: false, ADD_REACTIONS: false },
      )
      
    msg.edit("Đã khóa kênh thành công!")

}catch(e) {
    console.log(e)
}


    }}