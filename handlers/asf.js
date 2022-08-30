
const { readdirSync } = require('fs');
const { VoiceConnectionStatus, entersState } = require('@discordjs/voice');

connection.on(VoiceConnectionStatus.Disconnected, async (oldState, newState) => {
    let count = 0;
    readdirSync('./commands').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                count++;
                client.commands.set(pull.name, pull);
            } else {
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
	try {
		await Promise.race([
			entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
			entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
		]);
		// Seems to be reconnecting to a new channel - ignore disconnect
	} catch (error) {
		// Seems to be a real disconnect which SHOULDN'T be recovered from
		connection.destroy();
	}
});