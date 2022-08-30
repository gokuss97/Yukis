module.exports = {
    name: 'kick',
    category: 'Manager',
    run: async (client, message, args) => {
        if(!message.member.permissions.has("868329213877420053")) return message.channel.send("Cậu không có sự cho phép của Gin.");
        if (message.deletable) message.delete();
        const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!toKick) return message.reply('Vui lòng nhập 1 người để kick');
        if (toKick.id == message.author.id) return message.reply('Bạn không thể kick chính mình!');
        const reason = args.slice(1).join(' ');
        try  {
            toKick.kick(reason);
            message.reply(`Đã chém ${toKick.user.tag} bay ra khỏi server!`);
        }
        catch(err) {
            message.reply(`Có lỗi khi kick!`);
            console.error(err);
        }
    },
};