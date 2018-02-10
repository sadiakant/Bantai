const Discord = require('discord.js');
const parsbot = new Discord.Client();
const request = require('request');
const steemjs = require('steem');
const moment = require('moment');
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
                    var secondsago = (new Date - new Date(result[0].last_vote_time + "Z")) / 1000;
                    var vpow = result[0].voting_power + (10000 * secondsago / 432000);
                    vpow = accountname + " Voting Power: " + Math.min(vpow / 100, 100).toFixed(2);
                    message.channel.send(vpow);
                }
                });
    }
    
    else if (msgorg.startsWith(prefix + 'accreated')) {
        let accountname = msgorg.replace(prefix + 'accreated ','');

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
                    var today = moment(Date.now());
                    var accountcreated = moment(result[0].created);
                    var accountcreateddays = today.diff(accountcreated, 'days');

                    var acdays = (accountname + " Account Created " + accountcreateddays + ' days ago');
                    message.channel.send(acdays);
                }
                });
    }

    else if (msgorg.startsWith(prefix + 'accspower')) {
        let accountname = msgorg.replace(prefix + 'accspower ','');

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
                
                var vesting_shares, delegated_vesting_shares, received_vesting_shares, total_vesting_shares , total_vesting_fund_steem=null;
                vesting_shares = result[0].vesting_shares;
                delegated_vesting_shares = result[0].delegated_vesting_shares;
                received_vesting_shares = result[0].received_vesting_shares;

            steemjs.api.getDynamicGlobalProperties(function(err, gresult) {

                total_vesting_shares=gresult.total_vesting_shares;
                total_vesting_fund=gresult.total_vesting_fund_steem;


                var steem_power = steemjs.formatter.vestToSteem(vesting_shares, total_vesting_shares, total_vesting_fund);
                var delegated_steem_power = steemjs.formatter.vestToSteem((received_vesting_shares.split(' ')[0]-delegated_vesting_shares.split(' ')[0])+' VESTS', total_vesting_shares, total_vesting_fund);

                    var acspower = (accountname + " Steem Power " + (steem_power+delegated_steem_power).toFixed(2) + ' SP ' + '(' + steem_power.toFixed(2) + ' ' + delegated_steem_power.toFixed(2) + ')');
                    message.channel.send(acspower);
                })
            }
        });
    }

    else if (msgorg.startsWith(prefix + 'accfow')) {
        let accountname = msgorg.replace(prefix + 'accfow ','');

            steemjs.api.getFollowCountAsync((accountname),
                function(err,fresult)
                {
                if(fresult === undefined)
                {
                    console.log("Invalid Acccount ID");
                    message.channel.send('Invalid Acccount ID');
                }
                else
                {
                var follower_count = fresult.follower_count;
                var following_count = fresult.following_count;
                
                var accfow = (accountname + " Follower:" + (follower_count) + ' Following:' + following_count);
                message.channel.send(accfow);

                }
            });
        }

        else if (msgorg.startsWith(prefix + 'accltvote')) {

            let accountname = msgorg.replace(prefix + 'accltvote ','');

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
                    var lastvote = moment(result[0].last_vote_time).add('hours', 3);
                    var lastvotemes = accountname + " Last Vote:" + (lastvote.format("YYYY-MM-DD HH:mm"));
                    message.channel.send(lastvotemes);
                }
            });
        }

    
            
});