const Discord = require('discord.js');
const parsbot = new Discord.Client();
const request = require('request');
const steemjs = require('steem');
const prefix = '$';


parsbot.login('');

parsbot.on('ready', () => {

    console.log('Pars Bot started.')

});

parsbot.on ('message' , message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let msgorg = message.content;

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

    else if (msg.startsWith(prefix + 'PRICE')) {
 
        let coinname = msg.replace(prefix + 'PRICE ','');
            request('https://api.coinmarketcap.com/v1/ticker/' + coinname,
                function(error,res,body)
                {
                var obj = JSON.parse(body);
                if(obj[0] === undefined)
                {   
                    console.log("Invalid Coin ID");
                    message.channel.send('Invalid Coin Name');
                }
                else
                {
                    console.log(obj[0]);
                    const embed = new Discord.RichEmbed()
                    .setThumbnail('https://files.coinmarketcap.com/static/img/coins/64x64/' + coinname.toLowerCase() + '.png')
                    .setColor(0x00AE86)
                    .setAuthor(obj[0].name + ' (' + obj[0].symbol + ')',' ')
                    .addField('Current Price (USD)',obj[0].price_usd +' USD ('+ obj[0].percent_change_24h + '%)',true)
                    .addField('Current Price (BTC)',obj[0].price_btc +' BTC ('+ obj[0].percent_change_24h + '%)',true);
                    message.channel.sendEmbed(embed);
                }
            });
    }

    else if (msgorg.startsWith(prefix + 'rep')) {
        let accountname = msgorg.replace(prefix + 'rep ','');

            steemjs.api.getAccounts([accountname],
                function(err,result)
                {
                    if(result["0"] === undefined)
                {
                    console.log("Invalid Acccount ID");
                    message.channel.send('Invalid Acccount ID');
                }
                else
                {
                    console.log(result["0"])
                    let value = accountname + " Reputation Score: " + (steemjs.formatter.reputation(result["0"].reputation));
                    message.channel.send(value);
                }
                });
    }

    else if (msgorg.startsWith(prefix + 'vpower')) {
        let accountname = msgorg.replace(prefix + 'vpower ','');

            steemjs.api.getAccounts([accountname],
                function(err,result)
                {
                    if(result["0"] === undefined)
                {
                    console.log("Invalid Acccount ID");
                    message.channel.send('Invalid Acccount ID');
                }
                else
                {
                    console.log(result[0]);
                    var secondsago = (new Date - new Date(result[0].last_vote_time + "Z")) / 1000;
                    var vpow = result[0].voting_power + (10000 * secondsago / 432000);
                    vpow = accountname + " Voting Power: " + Math.min(vpow / 100, 100).toFixed(2);
                    message.channel.send(vpow);
                }
                });
    }

});