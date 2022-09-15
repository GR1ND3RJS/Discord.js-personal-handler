import Discord from 'discord.js';
import { CommandFile } from '../types';

export = {
    command: {
        name: 'test',
        description: 'test slash command',
    },
    callback: async (interaction) => {
        await interaction.reply('Hello, World!');
    }
} as CommandFile.FileOptions;