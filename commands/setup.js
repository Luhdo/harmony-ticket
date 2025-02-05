const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || !message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
            return message.reply('برای استفاده از این دستور باید مجوز **MANAGE_GUILD || ADMINISTRATOR** 🚫را داشته باشید');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('GREEN');
        setupEmbed.setAuthor({ name: 'تیکت\n برای ساخت تیکت لطفا روی دکمه زیر کلیک کنید 🤝' });
        setupEmbed.setDescription('*یک چنل تازه برای شما ساخته میشود برای ارتباط با ما !*');

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('ساخت تیکت');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};
