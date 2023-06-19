const { Events, Message } = require('discord.js');
const yoimiya = require('../yoimiya')
module.exports = {
    name: Events.MessageCreate,
    /**
     * 
     * @param {Message} message 
     */
    async execute(message) {
        if (message.author.bot) return;
        const args = message.content.toLocaleLowerCase().trim().split(/ +/);
        //args = ['array, 'of', strings,]
        const command = args.shift();
        //command= 0th index element, in above case "array";
        switch (command) {
            case 'hey':
                message.reply('Heya');
                break;
            case 'simp':
                message.reply('I know you simp for me :3');
                break;
            // case 'summon protham':
            //     message.channel.send('KEEP UR EYES PEELED,THE ATMOSPHERE IS GONNA CHANGE,PROTHAM HAS APPEARED');
            //     break
        }

        if (message.content.startsWith('_yaoi')) {
            const msg = message.content.slice(5);
            if (!msg) return;
            message.delete().catch(err => console.log(err));
            message.channel.send(msg).catch(err => console.log(err));
        }
        else if (message.content.toLocaleLowerCase().includes("rui") || message.content.toLocaleLowerCase().includes("ali") || message.content.toLocaleLowerCase().includes("akarui")) {
            try {
                message.channel.send('**u hear a sound from no where saying:** \n **even if im not here,  fireworks gonna light ur path**\n ||<@1043111564582060052>||')
            } catch (err) {
                console.log(err)
            }
        }
        else if (message.content.toLocaleLowerCase().startsWith('summon protham'))
            message.channel.send('KEEP UR EYES PEELED,THE ATMOSPHERE IS GONNA CHANGE,PROTHAM HAS APPEARED\n||<@535077495876091904>||');
    }
};