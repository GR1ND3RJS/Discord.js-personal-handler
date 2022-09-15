# Hello, Welcome to my Personal discord.js bot commands handler, and event handler!


This was made by me, GR.#1000, and I hope you enjoy it!



# How to use it

1. Npm init -y your project since thats what I like to do and helps make a version of the project
2. Npm i discord.js
3. Npm i dotenv

# How to use the commands handler

The command handler makes it easy to create folders and different commands so all you need to worry about is what name you would like the command.name to be!

1. Create a folder called slash (optional, helps with organization)
2. Create a **file.ts** (name it. Ts is recommended so you can learn how the code is structured)
3. Copy the example template from ./src/types.ts (in comments)
4. Paste it into your file.ts
5. Change the name to what you want the command to be
6. Change the description to what you want the description to be
7. Add any options (if you are using vscode, you can use the intellisense to see what options you would like!)
8. Write code into the callback function!

# How to use the event handler

The event handler makes it easy to create folders and different events so all you need to worry about is what name you would like the event.name to be!

1. Create a folder called events (optional, helps with organization)
2. Create a **file.ts** (name it. Ts is recommended so you can learn how the code is structured)
3. Copy the example template from here:

import Discord, {EmbedBuilder, ButtonBuilder} from 'discord.js';
import {CommadFile} from '../evttypes';
```
export = {
    name: 'guildMemberAdd',
    callback: async(member //you do not need the : GuildMember, the type is already defined in the evttypes.ts file) => {
        //code here
        member.send(`Welcome to the server!`)
    }
} as CommandFile.EventOptions<'guildMemberAdd'>; //Make sure this text in here is the same as the event name!
```
4. Paste it into your file.ts
5. Change the name to what you want the event to be
6. Change the type name to what event you want it to be (you can find the event names here: https://discord.js.org/#/docs/main/stable/class/Client


# Additional info

- **Commands are passed in to your guild automatically.** To make them global, you need to change the comment code. (Soon I will change the process to be automatic based on the file system)
- Go into **config.json to set your serverId.**
- Go into **.env to set your bot token.**
- Types are needed so you follow the direct structure to make your code run. If you are familiar with it, you can change back to js and just do it like that. Works as well :)
- When making **buttons/select menus etc., you should never put in a command {...} object. All you need is a name of the interaction, "button1" and the type of the interaction, "button", and you are set.** Just call the callback and use the **XInteraction type instead of CommandInteraction for X particular interaction.**
- Any questions? *Dm me!*

