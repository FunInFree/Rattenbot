require("dotenv").config();

const { Client, Discord, MessageAttachment } = require('discord.js');
const client = new Client();

client.on("message", (message) => {
    
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    message.channel.send('What do you need?');
    message.channel.send('Type !ratten for Ratten');
    message.channel.send('Type !otter for Otter');
  }

  if (command === 'ratten') {
    const link = sentRandomImage(1, 10, 'ratten');
    const attachment = new MessageAttachment(link);
    message.channel.send(attachment);
  }

  if (command === 'otter') {
    const link = sentRandomImage(1, 983, 'otter');
    const attachment = new MessageAttachment(link);
    message.channel.send(attachment);
  }
});

  client.on('ready', () => {
    console.log(`Bot ist eingeloggt als ${client.user.tag}`);
  });

client.login(process.env.DISCORD_TOKEN);

function sentRandomImage(min, max, type) {
  const round = Math.round(Math.random() * (max - min)) + min;
  return type === 'otter'
    ? `https://cdn.qnt.one/otter/${round}.jpg`
    : `/Users/marcelballon/Documents/js/basic/ratten/${round}.jpeg`;
}

