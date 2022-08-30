const fetch = require('node-fetch')
const discord = require('discord.js')

module.exports = {
    name: 'yttogether',
    description: 'Xem Youtube trên discord',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        interaction.reply({ content: 'Thao tác thành công!', ephemeral: true });
        let channel = interaction.member.voice.channel;
        if(!channel) return interaction.channel.send("Bạn cần phải ở trong kênh để dùng lệnh")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses:0,
                target_application_id:'880218394199220334',
                target_type: 2,
                temporary: false,
                validate: null

            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
            
        })

        .then(res => res.json())
        .then(invite => {
            if(!invite.code) return interaction.channel.send("Lỗi lệnh")
            interaction.channel.send(`https://discord.com/invite/${invite.code}`)
        })








    }}