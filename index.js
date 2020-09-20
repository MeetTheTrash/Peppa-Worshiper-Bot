const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = "\\";

let peppaFact = ["TradingBooch12 is very cool", "S*zy Sheep Sucks", "Peppa Pig first aired on May 31, 2004", "There are 303 episodes of Peppa Pig", "ree man is also cool", "S*zy Sheep is pretty much satan", "brapo might be cool as well idk", "Peppa doesn't like politics", "Peppa has been to Australia and Paris", "Microwave is a S*zy Sheep follower, bully them please","TradingBooch12Alt is probably cool as well"];

let worship = ["All hail Peppa", "Peppa is our God", "Peppa is love, Peppa is life", "Peppa Pig is our queen", "Peppa Pig is yes"];

client.on("ready", () => {
    console.log("Logged in!");
    client.user.setPresence ({ 
        activity: { 
            name: '\\help' 
        }, 
        status: 'online' 
    });
  });
  

client.on("message", event => {
  let args = event.content.substring(PREFIX.length).toLowerCase().split(" ");

  switch (args[0]) {
      case "rules":
          const rules = new Discord.MessageEmbed();

          rules.setTitle("Peppa Worshipers Rules");
          rules.addField("1. Worship Peppa Pig", "Worship Peppa", false);
          rules.addField("2. Keep Bot Commands in their Channel", "To prevent spam", false);
          rules.addField("3. No NSFW", "It will disappoint Peppa", false);;
          rules.addField("4. No Peppa with 4 eyes", "It's very direspectful", false);
          rules.addField("5. No Insults", "You can insult eachother just don't insult Peppa Pig", false);
          rules.addField("6. Keep Off Topic things in #off-topic", "Try to keep #general for worshiping Peppa", false);
          rules.setColor(0xff50d1);

          event.channel.send(rules);
          break;

       case "help":
          const help = new Discord.MessageEmbed();
          
          help.setTitle("Peppa Worshipers Bot Help");
			help.setDescription("Commands:");
			help.addField("\\help", "Help for Bot", false);
			help.addField("\\info", "Information about the Bot", false);
			help.addField("\\peppaFact", "Tells you a fun fact about Peppa", false);
			help.addField("\\worship", "Worships Peppa", false);
			help.addField("\\roles", "tells you about the perms of each role", false);
			help.addField("\\roles-info", "tells you how to get each role", false);
			help.addField("\\app", "tells you how to apply for certain roles", false);
			help.addField("\\rules", "tells you rules of the server", false);
			help.addField("\\punishments", "tells you what heppens if you disappoint peppa", false);
			help.addField("\\invite", "gives you an invite for your friends to join the server", false);
			help.setAuthor("Created by TradingBooch12 and ree man");
			help.setColor(0xff50d1);
            
            event.channel.send(help);
          break;

        case "info":
           const info = new Discord.MessageEmbed();

            info.setTitle("Peppa Worshipers Bot Information");
			info.setDescription("I am a bot that was sent by Peppa");
			info.addField("Version:", "v3.1.2", false);
			info.setAuthor("Created by TradingBooch12 and ree man");
            info.setColor(0xff50d1);
            
            event.channel.send(info);
           break;

        case "peppa-fact":
           var index = Math.floor(Math.random() * peppaFact.length + 1);

           event.channel.send(peppaFact[index]);
           break;

        case "worship":
           var index = Math.floor(Math.random() * worship.length + 1);

           event.channel.send(worship[index]);
           break;

        case "roles":
            const roles = new Discord.MessageEmbed();

            roles.setTitle("Roles");
			roles.addField("High Priest", "Has all permissions, is highest rank on the Council of Peppa", false);
			roles.addField("Priest", "Has most permissions, peppa is proud of you", false);
			roles.addField("Cultist", "Has limited permissions, is very dovoted to peppa", false);
			roles.addField("Dedicated Worshiper", "Is dedicated to Peppa Pig", false);
			roles.addField("Worshipper", "Worships, but only a little", false);
			roles.addField("Doesn't Worship Enough", "nuff said", false);
			roles.addField("do \\roles-info for how to get each role", "", false);
            roles.setColor(0xff50d1);
            
            event.channel.send(roles);
            break;
            
        case "roles-info":
            const rolesInfo = new Discord.MessageCollector();

            rolesInfo.setTitle("Roles-Info");
			rolesInfo.addField("Worshipper", "Must be level 5+ and been on the server for a month", false);
			rolesInfo.addField("Dedicated Worshipper", "Must be level 15+ and have been on for 3 months, be on the subreddit, and have no 2nd warning", false);
			rolesInfo.addField("Cultist", "Must be level 30+ have been on for 6 months, be on the subreddit for 3 months, have posted at least once on the subreddit, and have no warnings + application (\\app for application info)", false);
			rolesInfo.addField("Priest", "Must have cultist rank + another application + subreddit moderator, or personally know one of the other high priests (DM high priest you know)", false);
			rolesInfo.addField("High Priest", "Must personally know one of the other high priests (DM high priest you know)", false);
            rolesInfo.setColor(0xff50d1);
            
            event.channel.send(rolesInfo);
            break;

        case "app":
            const app = new Discord.MessageEmbed();

            app.setTitle("Application");
			app.addField("App", "to apply, write why you think you would make a good (role) and if you have any experience, and your age. DM TradingBooch12Alt, TradingBooch12Alt, or TradingBooch12Alt on discord with your app, and all of the high priests will discuss, use \roles-info for what needs an application)", false);
            app.setColor(0xff50d1);
            
            event.channel.send(app);
            break;

        case "punishments":
            const punishments = new Discord.MessageEmbed();

            punishments.setTitle("Punishments");
			punishments.addField("1st warning", "If you break a rule or do someething you know is bad purposely then your first warning is a 24 hour mute, you get a day to read the rules and think about what you did. In addition, you are a disappointment to peppa)", false);
			punishments.addField("2nd warning", "If you do something again, then you will get a one week mute, seriously you already had a day. You are also a disgrace to peppa)", false);
			punishments.addField("ban", "If you break a rule a 3rd time then you get a 1 month ban, really dude? you had 8 days to read up. In addition peppa will become displeased of you.)", false);
			punishments.addField("permaban", "If you break a rule within one month of rejoining then you will be permabanned, you had 38 days and you could not repect peppa, so she will become very angry at you so you must leave.)", false);
            punishments.setColor(0xff50d1);
            
            event.channel.send(punishments);
            break;

        case "invite":
            event.channel.send("If you want to invite your friends or other people to the discord use this link: https://discord.gg/tRgK9kr");
            break;
      
  }
 	
  if (event.content.toLowerCase() === "hi") {
	event.reply("Hi")
  }
});

client.login(process.env.TOKEN);
