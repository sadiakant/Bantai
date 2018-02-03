const Discord = require('discord.js');
const parsbot = new Discord.Client();

const prefix = '$';

parsbot.login('discordtoken');

parsbot.on('ready', () => {

    console.log('Pars Bot started.')

});

parsbot.on ('message' , message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;

    if (msg === prefix + 'PING') {

        message.channel.send('Pong!');
    }

    else if (msg === prefix + 'HI') {

        message.channel.send('Hi ' + sender);
    }

});

