const { token } = require('./config.json');
const { MessageEmbed } =require('discord.js');
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

//Prefix du bot :

const prefix = 'j!';

//Token pour connecter le bot discord :

Client.login(token);

//Envoie un message a la console :

Client.on("ready", () => {
    console.log("✅ | Le bot a démarrer avec succés !");
});

//Status Personnalisé :
Client.on("ready", () => {
    function randomStatus() {
        let status = ["Utilise j!help pour savoir comment m'utiliser", "J'ai étais crée par Jdog220", "Pourquoi tu lis sa ?"]
        let rstatus = Math.floor(Math.random() * status.length);

        Client.user.setActivity(status[rstatus], {type: "WATCHING", url: "https://discord.com/api/oauth2/authorize?client_id=940541259657932821&permissions=8&scope=bot"});
    }; setInterval(randomStatus, 2000)
});

//Essentiels pour les commandes :

Client.on("messageCreate", message => {
    if (message.author.bot) return;


    // Commande : ping | j!ping :

    if(message.content === prefix + "ping"){
        message.reply("pong !");
    }

    // Commande : Jdog220 | j!jdog220yt :

    if(message.content === prefix + "jdog220yt"){
        message.reply("↓↓ |Toute les informations sur la chaine de Jdog sur youtube !| ↓↓\n \n \n**Contenue de la chaine** : __Pour l'instant la chaine est basé que sur du gaming__\n \n**Objectif de la chaine** : __Dépassé la barre des 1K d'abonnées__\n \n**Mon créateur vous demande de vous abonnées maintenant sinon il vous goume !**");
    }

    // Commande : minecraft | j!minecraft :

    if(message.content === prefix + "minecraft"){
        message.reply("↓↓ |Toute les informations de minecraft !| ↓↓\n \n \n**Date** : __Le 17 Mai 2009__ \n**Créateur(s)** : __Notch >ALIAS> Markus Persson__ \n**Type de jeu** : __Minecraft est un type de jeu Bac à sable__ \n**Nombre de langue que minecraft supporte** : __Minecraft supporte exactement 139 langues différentes__ \n**Repris** : __Le 15 Septembre 2014 à exactement 21:04, Hilnault Romaric à racheter Mojang donc Minecraft__ ");
    }

    // Commande : fortnite | j!fortnite :

    if(message.content === prefix + "fortnite"){
        message.reply("↓↓ |Toute les informations de fortnite !| ↓↓\n \n \n**Date** : __Le 28 Septembre 2017__ \n**Créateur(s)** : __Epic Games__ \n**Type de jeu** : __Fortnite est un type de jeu RPG__ \n**Nombre de langue que fortnite supporte** : __Fortnite supporte exactement 14 langues différentes__ \n**Mode de jeux** : __Fortnite a le battle royale et le sauver le monde__");
    }

    // Commande : Rocket League | j!rocketleague :

    if(message.content === prefix + "rocketleague"){
        message.reply("↓↓ |Toute les informations de Rocket League !| ↓↓\n \n \n**Date** : __Le 7 Juillet 2015__ \n**Créateur(s)** : __Psyonix__ \n**Type de jeu** : __Rocket League est un type de jeu de football__ \n**Nombre de langue que Rocket League supporte** : __Rocket League supporte exactement 5 langues différentes__ \n**Mode de jeux** : __Rocket League à l'occasionnel, compétitif, tournois et extra__");
    }

    // Commande : Grand Theft Auto V | j!gtav :

    if(message.content === prefix + "gtav"){
        message.reply("↓↓ |Toute les informations de Grand Theft Auto V !| ↓↓\n \n \n**Date** : __Le 17 Septembre 2013__ \n**Créateur(s)** : __Rockstars Games__ \n**Type de jeu** : __Grand Theft Auto V est un type de jeu d'action__ \n**Nombre de langue que Grand Theft Auto V supporte** : __Grand Theft Auto V supporte exactement 2 langues différentes__ \n**Environnement** : __Grand Theft Auto V se déroule a Los Santos__");
    }

    // Commande : Garry's Mod | j!garrys :

    if(message.content === prefix + "garrys"){
        message.reply("↓↓ |Toute les informations de Garrys's mod !| ↓↓\n \n \n**Date** : __Le 29 Novembre 2006__ \n**Créateur(s)** : __Valve Corporation__ \n**Type de jeu** : __Garry's Mod est un type de jeu Sandbox__ \n**Platforms** : __Garry's Mod est un jeu que sur PC__");
    }

    // Commande : help | j!help :

    else if(message.content === prefix + "help"){
        message.reply("**__Les commandes du bot : __**\n \n- **j!ping** : __renvoie pong !__\n \n- **j!jdog220yt** : __Informations sur la chaine de mon cher créateur__ \n \n**__Les commandes pour les informations de jeu :__** \n \n- **j!minecraft** : __Donne toute les informations de minecraft !__ \n \n- **j!fortnite** : __Donne toute les informations de fortnite !__ \n \n- **j!rocketleague** : __Donne toute les informations de Rocket League !__ \n \n- **j!gtav** : __donne toute les informations de Grand Theft Auto V__\n \n- **j!garrys** : __Donne toute les informations de Garry's Mod__");
    }
});