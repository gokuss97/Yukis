const { VoiceConnectionStatus } = require('@discordjs/voice');


module.exports = (client) => {
    console.log('Đã sẵn sàng phục vụ!');
    client.user.setPresence({ activities: [{ name: 'Với Gin [Lệnh là -] '}], status: 'online'} );
}