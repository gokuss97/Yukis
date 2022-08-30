const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    category: 'Manager',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.permissions.has('868329213877420053')) return message.channel.send('Ngươi không có quyền để kêu ta làm việc đó')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send('Shana không tìm thấy thành viên')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'mute')
        if(!role) {
            try {
                message.channel.send('Role bị mute không tìm thấy, hãy thử tại role đó đi.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role đã được tạo thành công.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} đã bị khóa chat.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} đã bị mute.`)
    }
}