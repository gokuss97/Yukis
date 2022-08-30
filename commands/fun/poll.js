const Discord = require('discord.js');
const { poll } = require('discord.js-poll');

module.exports = {
	name: 'poll',
    category: 'fun',
	run: async (client, message, args) => { {
		poll(message, args, '+', '#00D1CD');
	}
}}