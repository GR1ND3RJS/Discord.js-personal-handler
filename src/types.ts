import Discord, { ApplicationCommandData, ChatInputApplicationCommandData, PermissionsString } from 'discord.js'

export namespace CommandFile {
    export interface FileOptions {
        command?: ApplicationCommandData;
        name?: string | undefined;
        type?: 'slash' | 'button' | 'dropdown' | 'modal';
        permissions?: PermissionsString[];
        defer?: boolean;
        ephemeral?: boolean;
        callback: (interaction: Discord.CommandInteraction<Discord.CacheType> | Discord.ButtonInteraction<Discord.CacheType> | Discord.ModalSubmitInteraction<Discord.CacheType> | Discord.SelectMenuInteraction<Discord.CacheType>) => void;
    }

    // THIS IS MY OWN NAMESPACING, NOT FROM DISCORD.JS
    // Used to make the command options easier to read
    //If you want to create a new slash command, copy this:

    /*

    import Discord, { ButtonBuilder, hyperlink, SelectMenuInteraction } from 'discord.js';
    import { CommandFile } from '../types';

    export = {
        command: {
            name: 'name',
            description: 'description',
        },
        callback: (interaction: Discord.CommandInteraction) => {

        }
    } as CommandFile.FileOptions;

    */

    // If you want to create any buttons, menus, etc. copy this:

    /*

    import Discord, { ButtonBuilder, hyperlink, SelectMenuInteraction } from 'discord.js';
    import { CommandFile } from '../types';

    export = {
        name: 'name' 
        type: 'type', //[only takes in dropdown, button, modal]
    } as CommandFile.FileOptions;
    callback: (interaction: Discord.XInteraction) => {
            
    }

    */

    // FOR BUTTONS, MENUS, ETC. ONLY, the TYPES ARE:

    // ButtonInteraction | ModalSubmitInteraction (modals) | SelectMenuInteraction (dropdown)
    
}


