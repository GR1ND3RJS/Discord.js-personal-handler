import path from 'path';
import fs from 'fs';
import Discord from 'discord.js';
import runCmds from './runEvents';

export default function readCmds(client?: Discord.Client) {

    function readDir(directory: string) {
        const files = fs.readdirSync(path.join(__dirname, directory))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, directory, file))
            if (stat.isDirectory()) {
                readDir(path.join(directory, file))
            } else if (file !== 'runEvents.ts' && file !== 'readEvents.ts' && file !== 'types.ts' && !file.endsWith('.json') && fs.readFileSync(path.join(__dirname, directory, file)).toString().includes('CommandFile.EventOptions')) {
                const option = require(path.join(__dirname, directory, file))
                if(client) {
                    runCmds(client, option)
                }
            }
        }
    }

    readDir('.')
}