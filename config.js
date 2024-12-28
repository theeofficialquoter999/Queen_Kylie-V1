//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/purbus.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/lt92j5.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27615045572";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session-ll.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVA0MmcwWE5xQ2hQMDZlKyszcmZ3TzdBcjU5NlFlOTd3Ykc3UTR4TmFWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVEvc1U5SE0vditxQjlkRi9aTTlGT3JYSU4rRUpLWEVCZC9IeFgyMXNTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTTd2UXI1aWNCRlVmRnk5ZE5LQUU4cXYyb0JpNDFVMVN3bVU3ZnZubzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUQk13dVRHckxJeU10alJVN2VEY1paOVg0cjhSbUdRZ1Z0NEd0UmpHNHpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBbXB3YjRpem45NWlhMk8wWDdJQjhnYWRkdHBDOC9jZ2NSR0FWN29nV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU5V25YUjk5MnZOaFE3V2pvWTNxRlBvbHBsVFl3bVVuVWhtdkpkdFJOaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMER6K2Zyc1JQSHY0QUpiZy9hZ2ZWLzNKYjBrd0NLVDdjVGcvU2lxdTFGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXBRcGpJalRhU251TGdaRkowR2tQLzM3WmsxeUhyU2huczVCaG95VUxEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllpS3ZLeXBtcmtSOG1iVXh0NFh0QXNVaWN5a0hnRHhESWlqVGZWTjZuVXN2VGxudjIrcGpBWTR5azBZbXZ2TFY3SXlGSEpwRnhvWVF4SFEyTjRpZ0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiI2WnM4Y2NVV0VDeVMrekpWQUFONVZzYTNoNkJaRWY2NitwQThpMjczYXFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODM1MDM5NzI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0MTY5QkQxNzc5REQ1QzY1NTc4NEZDRjMzRjVGMzc1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUzOTQyMzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODM1MDM5NzI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDNDlDNEU3M0UwQ0NCQ0I4QTREN0RBRERBMDk5QURFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUzOTQyMzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODM1MDM5NzI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDNDlDNEU3M0UwQ0NCQ0I4QTREN0RBRERBMDk5QURFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUzOTQyMzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA2TUZ3aTU0Ui1hdjg1X2pBaTlOOWciLCJwaG9uZUlkIjoiMWMyZjUzNWItMjc3MS00NTAyLTg1NDgtMTI3ZWUwNWJiN2RjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4cG5CZnd4bjArdTNsNHhlcXlQTVN2djU1ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwS0RjSkk2d1gxaE1CSzAxZmE5dmV6Z2NOS3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUc1VEM5TUUiLCJtZSI6eyJpZCI6IjI3ODM1MDM5NzI1OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2FkaWxsYWMgQ3lsZWUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lIWm9xMEdFS3FId0xzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImM1bGlISTYzQUpFalBpWURtcVl1enUwZTBLa082Um4yNEhCdDE3NzVuazg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhuWFh1aWtlcllpeFpGM2xBOWFLY1lsVkE4WmE2WHg2b0ZXUjl2NlBkMUhlRmNFeGZLL2RZV0tjTUJGOVRHaVlZaVFwMExGSTYwSFhIdEN2a1VpMEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtRTZMVWVUYTYxbVZOWDhIZEc1dDBTbGFDVzI5KzBJOHc0QzE0NzZUSWlrYzVTemZkYUYzdXBTN0lxWlh4b3J5RTJoWGFhTmdCQlVYcFBRYlNwWFdBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3ODM1MDM5NzI1OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWE9aWWh5T3R3Q1JJejRtQTVxbUxzN3RIdENwRHVrWjl1QndiZGUrK1o1UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTM5NDIzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZkkifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
