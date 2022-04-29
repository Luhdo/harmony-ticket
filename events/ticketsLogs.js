const { Log } = require('../config.json)
module.exports = (client, type, guild, user) => {
const channel = client.guild.channels.cache.get(Log)
    switch (type) {

        case 'newTicket': {
            return console.log(`${user.username} just created a ticket on the server ${guild.name}`);
        }

        case 'closeTicket': {
            return console.log(`${user.username} just closed a ticket on the server ${guild.name}`);
        }

        case 'reopenTicket': {
            return console.log(`${user.username} just reopened a ticket on the server ${guild.name}`);
        }

        case 'deleteTicket': {
            return console.log(`${user.username} just deleted a ticket on the server ${guild.name}`);
        }

        case 'saveTicket': {
            return console.log(`${user.username} just saved a ticket on the server ${guild.name}`);
        }
    }
};
