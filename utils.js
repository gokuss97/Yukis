const checkSameRoom = (message) => {
    if (!message.member.voice.channel) return message.reply('Bạn phải vào kênh để dùng lệnh!');
    if (!message.guild.me.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID) return;
    return message.reply('bạn phải chung phòng với Shana mới được dùng lệnh này!');

}

module.exports ={
    checkSameRoom,
}