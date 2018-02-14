# Parsbot
### What is the project about?
Parsbot is a discord bot for steem account datas and query all the coin prices. Parsbot has a discord bot account for incoming messages and send messages with bot token. It currently has 13  commands, of course, according to this desire and development, it may increase or decrease in the future.

### Technology Stack
* Nodejs
* Npm

#### Node Modules and API
* [Discord.js](https://discord.js.org/#/)
* [Request.js](https://www.npmjs.com/package/request)
* [Moment.js](https://momentjs.com/docs/)
* [Steem.js](https://github.com/steemit/steem-js)
* [Coinmarketcap API](https://coinmarketcap.com/api/)


### Roadmap
Parsbot is open to development because it is completely open source. In the future I should add the upvote command. Of course I will continue to bug fixes and improve the code. You can comment on your suggestions.

### Parsbot Commands
```$Help:``` Displays all commands and usages of Parsbot.

![1.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518614632/phd4ipbvjyppm5ah85pc.png)

```$Ping:``` Send "Pong!" message for bot run and server speed test.

![2.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518614810/kmmvkazhxcadfuw99d3g.png)

```$Hi:``` Send "Hi @sender" message.

![3.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518614980/hhr5hswdxzlawhg8byue.png)

```$Merhaba:``` Send "Merhaba @sender" message (Turkish).

![4.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518615038/vdcihl8bmzxuphyshas8.png)

```$Selam:``` Send "Selam @sender" message  (Turkish).

![5.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518615103/d3ibccgsut37eduohvbi.png)

```$price coinname:``` Displays "coinname" current usd and btc price.

![7.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518615347/zqjvdhek9k5qcso0uzqm.png)

```$rep accountname:``` Displays account  reputation score.

![8.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518615506/leu7zbnw4ym476tgjmxo.png)


```$vpower accountname:``` Displays account  voting power.

![9.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518615617/qaukfswj9xmd68qusqeb.png)

```$accreated accountname:``` Displays how many days ago account was created.

![10.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518616263/vtuetnnycmddaiibvzuk.png)

```$accspower accountname:``` Displays account steem power.

![11.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518616463/gbbwcauiuyeohfibs0jk.png)

```$accfow accountname:``` Displays account follow and followers count.

![12.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518616561/o4ckdasz276giurrtluc.png)

```$accltvote accountname:``` Displays account last  vote date time.

![13.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518616640/ijm7ougrtws4mgyjkdvj.png)

```$accdata accountname:``` Displays account all data with profile image.

![14.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518616731/mi3dqybnicwjpbk5ko9e.png)

### Install
Firstly we need to download and install Node.js from[ Node.js Website](https://nodejs.org/en/download/).

Command Prompt Code(For node version control)

```node -v```

After you install Node.js you can control the node version via cmd. If you are fail to install it

'node' is not recognized as an internal or external command, operable program or batch file.
you will get the error.

But if your installation is successful, you will see your node version successfully.

![1.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518630514/lf5adpui0whh7egs6gcq.png)

After installing node.js, you can download parsbot via github or clone your computer.

Clone:

```cd projectfolder```

```git clone https://github.com/pars11/parsbot```

You need to enter your bot token in the "parsbot.login('');"  section in the app.js file.

More info discord app and bot token. [Tutorial 1](https://utopian.io/utopian-io/@pars11/parsbot-or-discord-bot-tutorial-node-js-or-part-1)

And Run.

```node app.js```

![2.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1518631319/elljxiraayqn5bwdpfer.png)


### How to contribute?
You can reach me send message on the discord (pars11) or email (sametay153@gmail.com).If you want to make this application better, you can make a Pull Request.
