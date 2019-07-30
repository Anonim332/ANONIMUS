const Discord = require(‘discord.js’);

const client = new Discord.Client();

var prefix = ‘!’

client.on(‘message’, message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + ‘help’)) {
        message.channel.sendMessage(‘Привет я БОТ!’);
     }
});

client.login(‘NTg5MTU5OTI1ODQ2OTAwODkx.XUCRGA.wHh-jySkUYoTYRDvyZN4HrUUW0w');
