const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61U2Y6jSBD8l3q1NeY+LLW0mMPGFz7AB6t9KEMB1UBBQ2GbHvnfV9jdMy3NbG+vtDwVdWRGREbmd0AKXKMZasHwOygrfIYUdUvalggMwaiJIlSBPgghhWAI9qZm+5P24DmoR5ok7ymz9GXwMnt22/3z0T+PZraFpju9R9IncOuDsjllOPgkoHhali/q/CAuCn7eKwapmSxDhbAvOgp1abfQtkQXi4nabNZP4NZFhLjCJDbLBOWogtkMtSuIq6/B75kw9V6lzArgWOH3l1NhtSiWuUF2oZGayFXiQDyzlwvv8jX4ya5OJwfHxHDsGr1jOvB84RIXPJ6uBwdXFiCT8rHDMqe194Bf45ig0A4RoZi2X9ZdcfjRgDuUV08faf5mIi6UlcsZM8WdXTaOWTaXuZMZ85XArr8GPKit0OE3NdxlK84+hMV4P2hdRDaKbElk6YX5lerZOevpwkfgq+rdK+l/0X22JN58zsauOXnVjaOtb69sOLeXWmFfBU1Ij9KALB0LpWnwNfjPc37mufikQ1/A/oIdrdfVaXu+8pCfB5uz8PqS9i5FEhPu+BM+pE31Gcrr0TwvZc02rnvTVvP81KJDaovCVTzNV9KWn+wjxdWjYhnl7viwczzHYy9pfn6eJiG38Bt0GUOS+4fN7BVKL82+x5xiY/10Z5Si1g7BkL31QYViXNMKUlyQbo9jlT6A4XmLggrRu7yAH9cVWkoj3+oJGlVdNnDJesub7co9RL4ib/fuMs893EjBE+iDsioCVNconOCaFlW7QHUNY1SD4Z/3SnWkK5QXFE1xCIaAE0WJZQVOFCTlj/rbJYG0hmX5jSAK+iCqinyBwJBWDeqD+wNV10YGzxq6oYxYS+NHgsAxpmEasqgKkmx1FPNHUhfnqKYwL8GQlQWVkxmRE2/9/weHqBoKP1J0VjQYbqTKPKcZkmrwCitbFi8qn+Pg2dtffUDQlT583KnPs30Q4aqmHmnKrIDhu8nfD2EQFA2h25YEerdAFRh+2EaUYhLXHbOGwCpI8BnpHQ8wjGBWox8FRxUK37m8DTG9CDsfOiavr3VjDzrsXaBftBkKzK/yENjdBjDDdUFAH2T3Z4rIyqIoSyojCnz3rtu+/cDbhQ8RhTirwRDoy3nLrTzLdOTBc22PxxoTa3qsgZ/83vvm4cs2WJLT1TFxwlZkjdR1ruDRkTjxLlhbpjez02RA0Pi0JPXTb4J0TvK2dW8SU5VRe5Nwnr9krucvED68WBpWY3sVMGPR1jY5s+ciX1mUu7E3agYRXFl1aS8Qvto8reowmtY9rg64cDB29PipyxaiMw7Qx2R6ImWtqdZkK6GcLjy7Iarrabu1f/UHwjXrufw+tKwG0f0BQR6e9pgcX5nNTN4tg2aBDhtvIBWcWiiN1/LifHHiYk17dPR9omRvkxy/9Rq+/0YY3QfjW4X+tZIP4J3hmFv/Q4y3UfsP42oUEMPnFDexixCKzOTsTc92vJ++FtbBHG0sHU/tSOST/NWXwa1zfplBGhVVDoagzk8Q9EFVNJ19bRIVn2TStdjW4gftDNZU+9kSv+t25nFrVRXlBNZJp8CKPSZR5+9WK8sthfS9w4DWfWOTgtvfoGSsfYwIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255611425468",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
