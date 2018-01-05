const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "?"

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content === prefix + 'ping') return message.channel.send(`Pong! Latency: ${Date.now() - message.createdTimestamp} ms`);
    if(message.content === prefix + 'help') return message.channel.send('ALL COMMANDS START WITH THE PREFIX ~ ping: a command that replies Pong! pingemortal: pings emortal. pingdominic: pings me the creator of the bot pingpotato: pings apeek.whoiscool: Says someone is cool! whatareyou: Tells you what i am.')
    if(message.content === prefix + 'whoiscool') return message.reply('Is cool (JK emortal is)')
    if(message.content ===  prefix + 'whatareyou') return message.reply('i am a bot. https://www.quora.com/What-is-a-discord-bot-What-is-a-discord-server')    
    if(message.content ===  prefix + 'pingdominic') return message.channel.send('<@287696585142304769> you have been pinged by someone for some reason, probably because your bot is broken')
    if(message.content === prefix + 'pingemortal') return message.channel.send('<@261498586611712000> you have been pinged for some reason by someone')
    if(message.content === prefix + 'pingpotato') return message.channel.send('Dunno how potatos can be pinged...')
    if(message.content === prefix + 'banurself') return message.reply('Thats something you have to do manually')
    if(message.content === prefix + 'kickurself') return message.reply('Thats something you have to do manually')
    if(message.content === prefix + 'kick') return message.channel.send(':x: NOPE, that\'s something you have to do manually')    
    if(message.content === prefix + 'ban') return message.channel.send(':x: NOPE, that\'s something you have to do manually') 
    if(message.content === prefix + 'info') return message.channel.send('This is a bot created in the `discord.js` programming language. if you need help join our __***SUPPORT SERVER***__ at https://discord.gg/KJRM2Zv or message **DominicCM#2360** on discord. Invite Link: https://discordapp.com/oauth2/authorize?client_id=389240402261311498&scope=bot&permissions=8 ')
});

bot.login('Mzg5MjQwNDAyMjYxMzExNDk4.DQ4sBw.aG28DKX0S6GhNH_6KKEJKxxcBCc')
