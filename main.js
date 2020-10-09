const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content === prefix + 'pingpotato') return message.channel.send('Dunno how potatos can be pinged...')
    if(message.content === prefix + 'banurself') return message.reply('Thats something you have to do manually')
    if(message.content === prefix + 'kickurself') return message.reply('Thats something you have to do manually')
    if(message.content === prefix + 'kick') return message.channel.send(':x: NOPE, that\'s something you have to do manually')    
    if(message.content === prefix + 'ban') return message.channel.send(':x: NOPE, that\'s something you have to do manually') 
    if(message.content === prefix + 'info') return message.channel.send('This is a bot created in the `discord.js` programming language. if you need help join our __***SUPPORT SERVER***__ at https://discord.gg/KJRM2Zv or message **DominicCM#2360** on discord. Invite Link: https://discordapp.com/oauth2/authorize?client_id=389240402261311498&scope=bot&permissions=8 ')
});


client.on('message', async message => {
    if(message.content === "?ping"){
        message.channel.send(`Pong! Latency: ${Date.now() - message.createdTimestamp} ms`);
    } else if {
        if(message.content === "?help"){
            const embed = new Discord.MessageEmbed()
            .setTitle("**Help Menu**")
            .setDescription("**The bots prefix is: ?***")
            .addField("Commands", "`ping` `whoiscool` `whatareyou` `pingdominic` `pingmortal` `pingpotato` `banurself` `kickurself` `kick` `ban` `info`")
            .setFooter("Made by DominicCM, NathIsEmortal, Deni")
            .setTimestamp()
            message.channel.send(embed)
        } else if {
            if(message.content === "?whoiscoool"){
                message.channel.send("Is cool (JK emortal is)")
            } else if {
                if(message.content === "?whatareyou"){
                    message.channel.send("I am a bot. https://www.quora.com/What-is-a-discord-bot-What-is-a-discord-server")
                } else if {
                    if(message.content === "?pingdominic"){
                        message.channel.send("<@287696585142304769> you have been pinged by someone for some reason, probably because your bot is broken")
                    } else if {
                        if(message.content === "?pingemortal") {
                            message.channel.send("<@261498586611712000> you have been pinged for some reason by someone")
                        } else if{
                            if(message.content === "?info"){
                                const newembed = new Discord.MessageEmbed()
                                .setTitle("**Info**")
                                .setDescription("**This Bot is created with discord.js**")
                                .addField("Invite Link","https://discordapp.com/oauth2/authorize?client_id=389240402261311498&scope=bot&permissions=8")
                                .addField("Support", "https://discord.gg/KJRM2Zv or message **DominicCM#2360** on discord ")
                                .setFooter("Made by DominicCM, NathIsEmortal, Deni")
                                .setTimestamp()
                            }
                        }
                    }
                }
            }
        }
    }
});

client.login('Mzg5MjQwNDAyMjYxMzExNDk4.DQ4sBw.aG28DKX0S6GhNH_6KKEJKxxcBCc')
