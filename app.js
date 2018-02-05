const Discord = require('discord.js');
const parsbot = new Discord.Client();
const request = require('request');
const prefix = '$';


parsbot.login('');

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

    else if (msg === prefix + 'HELLO') {

        message.channel.send('Hello ' + sender);
    }

    else if (msg === prefix + 'MERHABA') {

        message.channel.send('Merhaba ' + sender);
    }

    else if (msg === prefix + 'SELAM') {

        message.channel.send('Selam ' + sender);
    }

});