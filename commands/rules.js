const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
	    let embed = new MessageEmbed()
            .setTitle("Frownmc Cheap Hosting")
            .setDescription("Paket 1 | 10.000 / Bulan\nRam: 1GB\nDisk: 5GB\nCpu: 100 Intel Xeon 8vCPU\nRegion: Singapure 🇸🇬")
            .setColor("#8F00FF")
            .setTimestamp();
        message.channel.send(embed);
}

exports.help = {
    name: "rul",
    aliases: [],
    usage: `rul`
}