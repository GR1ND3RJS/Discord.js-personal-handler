import Discord, { GuildMember } from 'discord.js';
import { CommandFile } from '../evttypes';



export = {
    name: 'guildMemberRemove',
    callback: async (member) => {
       
    }
} as CommandFile.EventOptions<'guildMemberRemove'>;