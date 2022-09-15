/* Imports */
import Discord from 'discord.js';
import dotenv from 'dotenv';

/* File Imports */

import readCmds from './src/readCmds';
import createCmds from './src/createCmds';
import readEvents from './events/readEvents';


/* Initialization */

dotenv.config()



export const client = new Discord.Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMessageReactions', 'GuildMessageTyping', 'GuildMembers', 'DirectMessages', 'GuildMessages']
});




/* Startup */

client.on('ready', () => {
    createCmds(client)
    readCmds(client)
    readEvents(client)
})



client.login(process.env.DISCORD_BOT_TOKEN)

// NOTHING IN THIS FILE SHOULD BE CHANGED. ONLY DO SO IF YOU KNOW WHAT YOU ARE DOING.

