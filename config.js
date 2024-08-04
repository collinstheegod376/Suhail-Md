const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_41_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5c0JwbERhb1hSaVZEdElxT3QxVW8ydDVhczk0b2hMb0VRWk1DWFFjdEZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjExMDI4MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMTJCNkQ5RjhBQjZEODBFMkFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc3ODkwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMVVBNcjFBYlNFMkJYZ1I1dVUyUjdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlNTU0NGI0LWFkYjgtNGMyNi1hYzY5LTk1YzljN2I3NTMxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTksXG4gICAgICAxMjcsXG4gICAgICA2MSxcbiAgICAgIDczLFxuICAgICAgNCxcbiAgICAgIDIsXG4gICAgICA1MCxcbiAgICAgIDIxMyxcbiAgICAgIDEyLFxuICAgICAgMjE2LFxuICAgICAgOTYsXG4gICAgICAxMzUsXG4gICAgICAxNDksXG4gICAgICAxMzYsXG4gICAgICA5NixcbiAgICAgIDM4LFxuICAgICAgOCxcbiAgICAgIDk4LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDE5NixcbiAgICAgIDMwLFxuICAgICAgMjQxLFxuICAgICAgMTU5LFxuICAgICAgMjE0LFxuICAgICAgMTM3LFxuICAgICAgMTY2LFxuICAgICAgODMsXG4gICAgICAyMTcsXG4gICAgICA3LFxuICAgICAgMTQ5LFxuICAgICAgMTgwLFxuICAgICAgMzUsXG4gICAgICAxODYsXG4gICAgICAyNyxcbiAgICAgIDI1MCxcbiAgICAgIDE1NCxcbiAgICAgIDYxLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpUNU1LTkZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYxMTAyODM0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJZVU5PIEYyRlwiLFxuICAgIFwibGlkXCI6IFwiMTU0OTg4NjA5MzI3MjE0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3k2cGNnS0VJeUt2clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRYUpsWHJ0cTlQbG5ybHFnR0dock4rM0c4SUZTM1hOeThKY2duZU1YbjNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNDcG10RzFXZzFPeGxveXVWT2VjaHJMNitsUzc4WjNTanpiYVJVRmpOZ21VTko0dmRzMnNqUVVmd2JCVTE2SEJ6UGFRTW94NlV1QTBZRlN3TytSNUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlI4bnpxd044U2hDTWRLOGtZUGF2cDkwNlR5c2V0c2VXamRZc0hVWGFYdmFMSzNHUmdaZjQ4SEcwRzRNSnpJajd1aUYwVms4VVBNZWdwVGJpVDM1cEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjExMDI4MzQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3Nzg4OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCN0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI3QS5qc29uIjogIntcImtleURhdGFcIjpcIlF1TVZHaG1YQS9CUFRZNnIvWlFhNFlNMG1KaGxtSlRKQ3NsbjdQelVtS1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzNTk2MzI0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzc4ODk3MjQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
