const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'user-info',
	aliases: ['usi'],
	category: 'Manager',
	run: async (client, message, args) => {
		let user =			message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;

		let status;
		switch (user.presence.status) {
		case 'online':
			status = '<:online:993046779413143632> online';
			break;
		case 'dnd':
			status = '<:dnd:993046930693304371> dnd';
			break;
		case 'idle':
			status = '<:idle:993046882605604894> idle';
			break;
		case 'offline':
			status = '<:offline:993046833125412864> offline';
			break;
		default:
			status = 'Unknown';
		}

		const embed = new MessageEmbed()
			.setTitle(`${user.user.username}`)
			.setColor('#f3f3f3')
			.setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
			.addFields(
				{
					name: 'Tên: ',
					value: user.user.username,
					inline: true,
				},
				{
					name: '#️⃣ ID gốc: ',
					value: `#${user.user.discriminator}`,
					inline: true,
				},
				{
					name: '🆔 ID: ',
					value: user.user.id,
				},
				{
					name: 'Trạng thái hiện tại: ',
					value: status,
					inline: true,
				},
				{
					name: 'Activity: ',
					value: user.presence.activities[0] ? user.presence.activities[0].name : 'User isn\'t playing a game!',
					inline: true,
				},
				{
					name: 'Avatar link: ',
					value: `[Click Here](${user.user.displayAvatarURL()})`,
				},
				{
					name: 'Ngày tạo tài khoản: ',
					value: user.user.createdAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'Ngày tham gia: ',
					value: user.joinedAt.toLocaleDateString('en-us'),
					inline: true,
				},
				{
					name: 'Quyền thành viên: ',
					value: user.roles.cache.map((role) => role.toString()).join(' ,'),
					inline: true,
				},
			);

		return message.channel.send(embed);
	},
};