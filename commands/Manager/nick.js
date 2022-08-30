const { Client, Message, MessageEmbed } = require ("discord.js")

module.exports= {
    name: 'nick',
    category: 'Manager',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const member = message.mentions.members.first();
        if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Cậu không có sự cho phép của Gin.");
        if (!member) return message.reply("Xin onii-chan hãy nhập tên thành viên!");

        const arguments = args.slice(1).join(" ");

        if (!arguments) return message.reply("Xin onii-chan hãy nhập tên thành viên!");

        try {
            member.setNickname(arguments);

        } catch (err) {
            console.log(err);
            message.reply(
                "Ta không đủ quyền để đổi" + member.toString() + "tên!"

            );

        }
           
    },
    };


