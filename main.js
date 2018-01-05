const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "~"

bot.on('message', (message) => {
//this is where my ping command starts.
if(message.content == prefix + 'ping')
   // message.channel.send('Getting paddle ready....'
      //message.channel.send('Pong!').then(m => m.edit(`Took ${m.createdTimestamp - message.createdTimestamp} ms ${Math.round(bot.ping)} ms`))
message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
//ping command ends here
//the line below makes it so my bot ignores other bots
if (message.author.bot) return;

//general and funny commands
if(message.content == prefix + 'help')
    message.channel.send('ALL COMMANDS START WITH THE PREFIX ~ ping: a command that replies Pong! pingemortal: pings emortal. pingdominic: pings me the creator of the bot pingpotato: pings apeek.whoiscool: Says someone is cool! whatareyou: Tells you what i am.')

if(message.content == prefix + 'whoiscool')
     message.reply('Is cool')

if(message.content ==  prefix + 'whatareyou')
    message.reply('i am a bot. https://www.quora.com/What-is-a-discord-bot-What-is-a-discord-server')    

//commands for pinging people are located below
if(message.content ==  prefix + 'pingdominic')
    message.channel.send('<@287696585142304769> you have been pinged by someone for some reason, probably because your bot is broken')

if(message.content ==  prefix + 'pingemortal')
    message.channel.send('<@261498586611712000> you have been pinged for some reason by someone')

if(message.content == prefix + 'pingpotato')
    message.channel.send('<@249943909575294977> you have been pinged by someone for some reason')

//Moderator commands are located below.
if(message.content == prefix + 'banurself')
    message.reply('Thats something you have to do manually')

if(message.content == prefix + 'kickurself')
    message.reply('Thats something you have to do manually')

if (message.content == prefix + 'kick')
    message.channel.sendMessag(':x: NOPE')    

if (message.content == prefix + prefix + 'ban')
    message.channel.send(':x: NOPE')   

if (message.content == prefix + 'killlatency')
    message.channel.send('killed latency.')
//TROLOLOLOLOLOL   

if (message.content == prefix + 'info')
    message.channel.send('This is a bot created in the `discord.js` programming language. if you need help join our __***SUPPORT SERVER***__ at https://discord.gg/KJRM2Zv or message **DominicCM#2360** on discord. Invite Link: https://discordapp.com/oauth2/authorize?client_id=389240402261311498&scope=bot&permissions=8 ')

});



//bot.on('message', (message) => {
//
//});
//
  
bot.login('Mzg5MjQwNDAyMjYxMzExNDk4.DQ4sBw.aG28DKX0S6GhNH_6KKEJKxxcBCc')