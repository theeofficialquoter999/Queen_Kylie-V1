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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RRMG9HL2tDdk5FUDdiYUlPdHZqYjI2cENXeHdwZEIyd3FQZVdqaWVsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFMWVNvTFNpdjhQTjBOdkZWd1ZpcVVtcG5YMk5POWlNOEhIWDVWRy9qVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSUppeEFld2wwK0s1WFM5RC9RRzdOZ29mWnpkNHAxWUFCb3VmeVp0SlhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMk9ndmRvU25ta2FEbzhoVHAyemRrc0JjQU1KblF1UFBRYUd2MzhackdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCTUIvWTEzS1VrZDRFQmYvbjRBVEtaRG1waXFqaDBGSHR3ayszZXE3MVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlPdEt5Q3ZsMm81Vyt5RXkzS2ZoYUxoc0pKMGl3UXVjZUs3RC85eG5Sanc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtzcFA1UnpJYmQ0bldTQTJ3bndHYXFEdUU4cmxCMlFUYkVoTSttVktIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEsvU1BRZjdidFpWQkxBY2VUUmdkaVF1elQzOVZFeDFaVWpyQUNXa0lTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQrWVJyYmxIUDd6bGlDcHhnQkxpdHUwa0QxYUVnOVhoWi9UYStQaUZtWkQ4aG8yWmJRejU3dEJNT0c3U0lxbnV2d0pWQjRYSkJHenFCYVRBZnhCWEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJPdjN5OUMvR2tKSTlaRU9pclJjemhlQ29qdkJOKytBa0FZTTE5cmw2b0VFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUdk5QSGhZVlRNNmlldEpoWkd5QjR3IiwicGhvbmVJZCI6ImMzM2EwMWRkLWRiYWYtNDRmMi1iZGViLThhMzVlNGVmY2M4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0RWJrMVdnZXByMW1rM1MwM3VSRzNhS0pQU3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUgyN2dvb0JTUWlsamxTalVEUWcyR0FweVhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRRN1RLR05KIiwibWUiOnsiaWQiOiIyNzgzNTAzOTcyNTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl57wnZes8J2Xn/Cdl5zwnZeYIPCdl5bwnZeb8J2XlPCdl6fwnZeV8J2XovCdl6cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yLzVzSUJFTmJ0M0x3R0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpvUDYyNDBOakFUUzVWQ2RoLzVmQThrWWNMWktwTTVuVC9hM1JaUGRJMmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpMRkFMU29vaWRhSEpiRWI4MGJGcEpoMDBKYmEyejliYWp0TFlqazhwS1lhWGJFQjdtaCt5ZU1GemFNWEFQZUpuZ2xEbmtOVEFQZERPbmR3Tk1QQ0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyUDYyc1Ntb0xPZDVLVlY1QUlzTmZZS3dZZXJHN2JZVGhOdk9qU3FMdkdnZHV0UlN6WmdiQW45VUowS3kycmpDaDRKaG5FSDcxdUZqNFBoOVZXbGJBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3ODM1MDM5NzI1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTZEK3R1TkRZd0UwdVZRbllmK1h3UEpHSEMyU3FUT1owLzJ0MFdUM1NObiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzk2MzIzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHZWgifQ==" // session id here
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
