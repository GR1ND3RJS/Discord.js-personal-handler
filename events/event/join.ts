import Discord, { GuildMember } from 'discord.js';
import { CommandFile } from '../evttypes';



export = {
    name: 'guildMemberAdd',
    callback: async (member) => {
       
    }
} as CommandFile.EventOptions<'guildMemberAdd'>;