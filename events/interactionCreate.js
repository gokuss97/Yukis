
module.exports = (client, interaction, args) => {
    if (!interaction.isCommand()) return;
    const command = client.interactions.get(interaction.commandName);
    if (!command) interaction.reply('Lệnh không đúng');
    command.run(client, interaction, args);
}