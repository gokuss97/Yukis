const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'vy',
    category: 'Crush',
	run: async (client, message, args) => {
     const attachment = new MessageAttachment ("crush/Vy/284618846_608295857394804_6139548071940299221_n.jpg"
                                            

     );


     message.channel.send({ files: [attachment] });



    }

    }