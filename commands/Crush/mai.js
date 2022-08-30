const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'mai',
    category: 'Crush',
	run: async (client, message, args) => {
     const attachment = new MessageAttachment ("crush/Mai/FB_IMG_1659266044555.jpg"
                                            

     );


     message.channel.send({ files: [attachment] });



    }

    }