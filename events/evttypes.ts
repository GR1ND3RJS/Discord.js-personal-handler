import Discord, { ApplicationCommandData, Awaitable, ChatInputApplicationCommandData, Client, ClientEvents, PermissionsString } from 'discord.js'

export namespace CommandFile {
    export interface EventOptions<T extends keyof ClientEvents = keyof ClientEvents> {
        name: T;
        callback: (...args: ClientEvents[T]) => Awaitable<void>;
    }
}
    // THIS IS MY OWN NAMESPACING, NOT FROM DISCORD.JS
    // Used to make the command options easier to read
    //If you want to create a new slash command, copy this:

    

export type OutputData<T> = {
    error?: string;
    data?: T;
}

export interface SetFileOptions<Props, Output> {
    name: string;
    func: ({}: Props) => OutputData<Output> | Promise<OutputData<Output>>;
} 