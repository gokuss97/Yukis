const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'cat',
	category: 'fun',
	run: async (client, message, args) => {
		const url = 'https://some-random-api.ml/img/cat';

		let data,response
		try {
			response = await axios.get(url);
			data = response.data;
		} catch (e) {
			return message.channel.send('Đã xảy ra lỗi, xin hãy nhập lệnh lại!');
		}

		const embed = new MessageEmbed()
			.setTitle('Hình về một chú mè bất kỳ ><')
			.setColor('#f3f3f3')
			.setDescription(fact)
			.setImage(image);

		return message.channel.send(embed);
	},
};