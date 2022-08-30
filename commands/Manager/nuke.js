const { Message } = require ('discord.js')

module.exports = {
    name: 'nuke',
    category: 'Manager',
       /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has("868329213877420053")) return;
        if(!message.guild.me.permissions.has('868329213877420053')) return message.reply("M éo có quyền dùng lệnh đó ml, biến ra khỏi server t");
        
        message.channel.delete().then((ch) => {
            ch.setParent(messsage.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();
            
            ch.send("Kênh thoại đã được xóa")
        })



    }}