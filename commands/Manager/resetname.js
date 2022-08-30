const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "resetname",
    category: 'Manager',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const member = message.mentions.members.first();

        if (!member) return message.reply("Xin hãy nhập tên thành viên!");


        try {
            member.setNickname(null);
        }catch (err) {
            message.reply(
                "Ta không đủ quyền để đổi" + member.toString() + "tên!"
            )
        }
    }
}