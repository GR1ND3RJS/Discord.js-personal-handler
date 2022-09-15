import path from 'path';
import fs from 'fs';
import Discord from 'discord.js';
import runCmds from './runCmds';

export default function readCmds(client?: Discord.Client) {

    const interactions: any[] = [];

    function readDir(directory: string) {
        const files = fs.readdirSync(path.join(__dirname, directory))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, directory, file))
            if (stat.isDirectory()) {
                readDir(path.join(directory, file))
            } else if (file !== 'runCmds.ts' && file !== 'readCmds.ts' && file !== 'types.ts' && file !== 'createCmds.ts' && !file.endsWith('.json') && fs.readFileSync(path.join(__dirname, directory, file)).toString().includes('CommandFile.FileOptions')) {
                const option = require(path.join(__dirname, directory, file))
                interactions.push(option)
                if(client) {
                    runCmds(client, option)
                }
            }
        }
    }

    readDir('.')

    return interactions
}