import Discord, { CacheType, PermissionsString } from "discord.js";
import { CommandFile } from "./types";
import { image_data } from '../config.json';


interface PermissionOutput {
    allowed: boolean;
    missing?: PermissionsString[];
}



function checkForPermissions(interaction: Discord.CommandInteraction<CacheType> | Discord.SelectMenuInteraction<CacheType> | Discord.ButtonInteraction<CacheType> | Discord.ModalSubmitInteraction<CacheType>, permissions: PermissionsString[]): PermissionOutput {
    const data: PermissionOutput = {
        allowed: true,
        missing: [],
    }

    for(const permission of permissions) {
        if (!interaction.memberPermissions.has(permission)) {
            data.allowed = false;
            data.missing.push(permission);
        }
    }
    return data;
}

export default async function runCmds(
  client: Discord.Client,
  intOptions: CommandFile.FileOptions
) {
  let { name, type, callback, command, permissions = [], defer, ephemeral = true } = intOptions;
  

  if(command?.name) {
    console.log(`Started command ${command?.name}`)
    name = command.name;
    type = 'slash';
  }

  client.on("interactionCreate", async (interaction) => {
   
    if(interaction.isAutocomplete()) {
      return
    };


    const perms = checkForPermissions(interaction, permissions);

    if(perms.allowed === false) {

      

      let text = perms.missing.map(perm => `{${perm}} Permission\n`).join('')

      const embed = new Discord.EmbedBuilder()
      .setTitle(`Error: Missing Permissions`)
      .setDescription(`You are not able to use this command. You are missing the following permissions: \`\`\`${text || 'No permissions available'}\`\`\`\n\nIf you believe this is a mistake, please contact a member of the staff team.`)
      .setColor('#ff0000')
      .setTimestamp()
      .setFooter({ text:`Missing Permissions` })
      .setThumbnail(image_data.error);



        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        })

        return
    }


    
    


    if (interaction.isChatInputCommand()) {
      
      if(interaction.commandName.toLowerCase() === command?.name.toLowerCase()) {
        
        if (type === "slash") {
          if(defer) {
            await interaction.deferReply({ ephemeral });
          }
          callback(interaction);
        }
      }

      return
    }



    // if (interaction.isCommand()) {
    //   if (interaction.commandName.toLowerCase() === command?.name.toLowerCase()) {
    //     if (type === "slash") {
    //       callback(interaction);
    //     }
    //   }

    //   return
    // }

    if (interaction.isButton()) {
      if (interaction.customId.toLowerCase() === name?.toLowerCase() || interaction.customId.toLowerCase().includes(`${name.toLowerCase()}-`)) {
        if (type === "button") {
          if(defer) {
            await interaction.deferReply({ ephemeral });
          }
          callback(interaction);
        }
      }

      return
    }

    if (interaction.isModalSubmit()) {
      if (interaction.customId.toLowerCase() === name?.toLowerCase() || interaction.customId.toLowerCase().includes(`${name.toLowerCase()}-`)) {
        if (type === "modal") {
          if(defer) {
            await interaction.deferReply({ ephemeral });
          }
          callback(interaction);
        }
      }

      return
    }

    if(interaction.isSelectMenu()) {
      if(interaction.customId.toLowerCase() === name?.toLowerCase() || interaction.customId.toLowerCase().includes(`${name.toLowerCase()}-`)) {
        if(type === "dropdown") {
          if(defer) {
            await interaction.deferReply({ ephemeral });
          }
          callback(interaction);
        }
      }

      return
    }
  });
}
