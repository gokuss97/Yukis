const translate = require('translate-google')

module.exports= {
    name: 'translate',
    category: 'fun',
    aliases: ['tras'],
    run:async(client, message, args) => {
        translate(args.join(" "), {to : 'vi'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel.send('Đã xảy ra lỗi Onii-chan')
            console.log(err)
        })
    } 
}