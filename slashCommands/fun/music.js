const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports= {
    name: 'music',
    category: 'fun',
    description: "Complete music system",
    permission: "868329213877420053",
    options: [
        {
        name: "play",
        description: "Nghe nhạc",
        type: "SUB_COMMAND",
        options: [{ name: "query", description:"Nhập tên địa chỉ nhạc bạn muốn phát", type: "STRING", required: true}]

        },
        {
            name:"volume",
            description:"Chỉnh âm lượng",
            type:"SUB_COMMAND",
            options: [{ name: "percent", description: "10 = 10%", type: "NUMBER", required: true}]
        },
        {
            name: "settings",
            description: "Select an option",
            type:"SUB_COMMAND",
            options: [{ name: "options", description: "Chọn", type: "STRING", require: true,
        choices: [
            { name: "queue", value: "queue"},
            {name: "skip", value: "skip"},
            {name: "pause", value: "pause"},
            {name: "resume", value: "resume"},
            {name: "stop", value: "stop"},
        ]}]

        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */

     run: async (client, interaction) => {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;

        if(!VoiceChannel)
        return interaction.reply({content: "Bạn cần phải ở trong kênh để dùng lệnh!", ephemeral: true});

        if(guild.me.voice.channelID && VoiceChannel.id !== guild.me.voice.channelID)
        return interaction.reply({content: `Đang phát nhạc tại <#${guild.me.voice.channelID}>.`, ephemeral: true});

        try {   

            switch(options.getSubcommand()) {
                case "play" : {
                    
                    client.distube.playVoiceChannel( VoiceChannel, options.getString("query"), { textChannel: channel, member: member });
                    return interaction.reply({content: "🎶 Đang được phát!"});
                }
                case "volume" : {
                    const Volume = options.getNumber("percent");
                    if(Volume > 100 || Volume < 1)
                    return interaction.reply({content: "Bạn chỉ được chỉnh âm thanh từ 1 đến 100!"});

                    client.distube.setVolume(VoiceChannel, Volume);
                    return interaction.reply({content: `👍 Âm lượng đã được chỉnh \`${Volume}%\``});

                }
                case "settings" : {
                    const queue = await client.distube.getQueue(VoiceChannel);

                    switch(options.getString("options")) {
                        case "skip" :
                            await queue.skip(VoiceChannel);
                            return interaction.reply({content: "▶️ Bài hát đã được skip."})

                            case "stop" :
                                await queue.stop(VoiceChannel);
                                return interaction.reply({content: "⏸️ Bài hát đã được dừng."})
                                case "resume" :
                                    await queue.resume(VoiceChannel);
                                    return interaction.reply({content: "▶️ ..."})
                            case "queue" :
                                return interaction.reply({embeds: [ new MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(`${queue.songs.map(
                                        (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``)}`
           )]});

                    }
                    return;
                }

            }


        } catch (e) {
            const errorEmbed = new MessageEmbed()
            .setColor("Dark")
            .setDescription(`❌ Lỗi: ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }









    }}
































































