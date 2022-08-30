const discord = require("discord.js")

module.exports = {
    name: 'removerole',
    aliases: ['rv'],
    category: 'Manager',
    run: async (client, message, args) => {
            if (!message.member.permissions.has('868329213877420053')) return message.channel.send("Ngươi không có quyền để ra lệnh ta")

            const target = message.mentions.members.first()
            if(!target) return message.channel.send('Không có thành viên đó')
            const role = message.mentions.roles.first()
            if(!role) return message.channel.send('Vai trò đó không tồn tại')

            await target.roles.remove(role)
            message.channel.send(`${target.user.username} đã được gỡ role`)
    }}



