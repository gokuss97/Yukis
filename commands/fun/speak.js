
const { getAudioUrl } = require('google-tts-api');

module.exports = {
    name: 'speak',
    aliases: ['s'],
    category: 'fun',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('Xin hãy nhập gì đó để Shana nói giúp!');
        const string = args.join(' ');
        if (string.length > 200) return message.channel.send('Onii-chan hãy nhập dưới 200 từ nhé.');
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Onii-chan hãy là kênh voice để dùng lệnh ạ!');
        const audioURL = await getAudioUrl(string, {
          lang: 'vi',
          slow: false,
          host: 'https://translate.google.com',
          timeout: 10000,
        });
        try {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(audioURL);
                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                    
                });
            });
        }
        catch(e) {
            message.channel.send('Shana không hiểu onii-chan nói, xin anh hãy nói lại đi');
            console.error(e);
        };
        
 },

};