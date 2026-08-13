const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "Mᴏʜᴀᴍᴍᴀᴅ Aᴋᴀsʜ",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 𝐙𝐈𝐒𝐀𝐍 𝐒𝐀𝐑𝐃𝐀𝐑
│ 🧸 Nɪᴄᴋ       : 𝐙𝐈𝐒𝐀𝐍
│ 🎂 Aɢᴇ        : 22+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : 𝐒𝐈𝐍𝐆𝐋𝐄
│ 🎓 Pʀᴏғᴇssɪᴏɴ : 𝐉𝐎𝐁
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : 𝐓𝐇𝐄 𝐄𝐍𝐃
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 𝐃𝐡𝐚𝐤𝐚 - 𝐀𝐈𝐑𝐏𝐎𝐑𝐓
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : fb.com/100004039690397 
│ 💬 Messenger: m.me/100004039690397
│ 📞 WhatsApp  : wa.me/01743319347
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.imgur.com/1G4ZhU7.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
