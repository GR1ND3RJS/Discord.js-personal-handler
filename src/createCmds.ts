import Discord, { ApplicationCommandData } from 'discord.js'
import readCmds from './readCmds';
import { server_id } from '../config.json';


export default async function createCmds(client: Discord.Client) {
    const files = readCmds();

    const commands: ApplicationCommandData[] = []

    files.forEach(file => {
        const { command } = file;
        if(command !== undefined) {
            commands.push(command)
        }
    })




    ;(async () => {
        try {
            console.log('Started refreshing application (/) commands.');
            await client.guilds.cache.get(server_id)?.commands.set(commands)
            //await client.application?.commands.set(commands) set global commands

            

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}