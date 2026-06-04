const fs = require('fs-extra');
const path = require('path');
const { Sequelize } = require('sequelize');

if (fs.existsSync(path.join(__dirname, 'set.env'))) {
    require('dotenv').config({ path: path.join(__dirname, 'set.env') });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL || databasePath;

const database =
    DATABASE_URL === databasePath
        ? new Sequelize({
              dialect: 'sqlite',
              storage: DATABASE_URL,
              logging: false,
          })
        : new Sequelize(DATABASE_URL, {
              dialect: 'postgres',
              ssl: true,
              protocol: 'postgres',
              dialectOptions: {
                  ssl: { require: true, rejectUnauthorized: false },
              },
              logging: false,
          });

const config = {
    session: process.env.SESSION_ID || process.env.SESSION || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUXZOiSBD8L/2qsSKIgBETcYCgqIOgojIX99BAAz182t2ouOF/v8CZ2Z2Ivdub46kp6KrMrKz6DsoKU7RELZh8BzXBZ8hQd2RtjcAEaE0cIwL6IIIMgglIlhdjIO01So/wOXC3ZjDVlNhKeE7QOEedHyxlLalbvTX9J3Dvg7oJchz+JqE4P61cNJBg7jBY2ePreLmqc+PYzFaycOKxZ81wKvDmTK+ewL3LCDHBZWLUKSoQgfkStQ7E5Gvw12opHwZEDk5ody2E58yg9Wy0ohq/kdyX9TFUTouLX2qRl30N/pEbuMGaU1xeoY6d9TajFQmPRLSJ4+9qpe3tJbg/xS969g6f4qREkRWhkmHWfln3QqNCK+xe5dd4ZXlTe504g+g2gsv5UMLmQioyRv2mcQYF/RrwfUzV9rga927tgptVhqg6aSVJ4lQbb6RpsNFT7/A68Ft7k30G7pAPr2T/R/fEOrXu7LpOuXWxCgbOjLyKvhHO6L5XLU6j9XJRj8h85ZtZ8jX4Pl3vj8l1W7uZDPHN8VkopDNYlrdzM2alspcOaiVsQnWf/IQPWUN+h1Ibp5RcttIa87uXRjgPs95JWWGcHwM3tYXp0ifT43wpi0bsGa5UyOdRb33SQ8kVpTUW/dtZ1AhbcarvvMIr09bDYZxcnh6MMtRaEZgM731AUIIpI5Dhquxioz6A0XmLQoLYQ1zwrHg7HPjyMNhwl5VnpkszDQkMy4Unz/bVapepl+RwK5fL0RPog5pUIaIURXNMWUXaZ0QpTBAFkz8ffeooE1RUDC1wBCaAF8XxcDjixdFY/oN+u6SQUVjX30rEQB/EpCqeEZgw0qA+eFxQxZGoyLomKcaQN6bqWDB1XjMNnhNHCj+UO4LFW9EdLhBlsKjBZCjJnCiPOVG+/9UHJbqyN/d0nIVhH8SYUOaVTZ1XMPqw1sdHGIZVU7JtW4Z6d0AETD6FEWO4TGjHrCkhCVN8RnrHA0ximFP0Q2ZEUPTB5X116FX06P5sY4pzawM67F2iX7SZjJRf5Slh9zeAOaZVCfogf1yTxaEkitJY4cSR0N3rwvcfeLv0EWIQ5xRMgG4fW97xTGOFacqM2Uw1ElVPVPCT34db3/zQhnYZXNcGToekdJHiFjLW/HKd7EPXNLyllaWDEs0Cu6RP/5AETMD2Apd+vtkIUx32iswyuXFJ7enc1K+3XSFMX2RZco8WEk6j10vdO+OD0HOwss9vWliS3eb5dL1erHFjLdKDLB697c2bq521+yBCZxyiz8XcJtoriX69aid3mk4LOHcu3s7f8kcWXJlhNp6cb+wg4004b8sBcWybXeo9k26EE/Jb0FtlYjw9h659XdqQaIcLqlL3bY4ec5y/70/87nH8eI0xeqyj9w79ZyffgHeG4+79TzneF9y/LYmwnL7w8i61qgiK3PzsLc5WcljcKvNoaBtTxwsrFoW0uL1I4N45v84hiytSgAmgRQBBH5Cq6exrlXH1m0q6yllGklgd7RxSpv4ciX+asmEfFK1a11sG2cckAbV7poNXcP8b0opECeoHAAA=',
    PREFIXE: process.env.PREFIX || '.',

    API: process.env.API_URL || 'https://api.akuari.my.id',
    SIPUTZX: process.env.SIPUTZX || 'https://api.akuari.my.id',

    OWNER_NAME: process.env.OWNER_NAME || 'DULLAH-MD',
    NUMERO_OWNER: process.env.NUMERO_OWNER || process.env.OWNER_NUMBER || '+255611425468',
    BOT_NAME: process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL: process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',

    BOT_MENU_LINKS: process.env.BOT_MENU_LINKS || '',

    MODE: process.env.PUBLIC_MODE || 'no',
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'yes',
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '1',
    CHATBOT: process.env.CHATBOT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || 'yes',
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTIDELETE1: process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2: process.env.ANTIDELETE2 || 'no',
    STATUS_MENTIONS: process.env.STATUS_MENTIONS || 'no',
    ANTISTATUS: process.env.ANTISTATUS || 'yes',
    ANTICALL: process.env.ANTICALL || 'no',
    ANTIBAD: process.env.ANTIBAD || 'no',
    GROUP_ANTILINK: process.env.GROUP_ANTILINK || 'yes',
    AUTO_REACT: process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'no',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    AUTO_TAG_STATUS: process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER: process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || 'no',
    GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || 'no',
    RMBG_KEY: process.env.RMBG_KEY || 'MLt7fM4Sqv63U9FAt6FdPKRL',

    ANTI_VOICE: process.env.ANTI_VOICE || 'no',
    ANTI_SPAM: process.env.ANTI_SPAM || 'no',
    ANTI_REACT: process.env.ANTI_REACT || 'no',

    DATABASE_URL,
    database,
};

const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
