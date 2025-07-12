const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Va4+iSBT9L/V1zMijEDTpZEBAER/4QNTNfiihxFKeRYHixP++QbtnOpnZnt5k+VTU495zbp1z6ztIUlJgG9eg9x1klFSI4WbI6gyDHtDKwwFT0AIBYgj0wNIanN2jXDuddNb5IjgTfL15Z8vXh3NruZqGlKvGEc7HcTJ5AfcWyMp9RPwPAlrucH3grDSPiZgtc3t6WYnmjN7c9g6KJ2nmVEPFMI3CW5xfwL2JiAglSWhkRxxjiiIb1w4i9HPwPVVuw1TR8lzn/FmEBqOdSh2aWnx18dJ0F21Oo8gIJJ33Pwe/v+PLvnZSHKe9MtlVC1WHwknGmzN1GwUbTlDX2oi/kuvReMIvSJjgwApwwgirP113YSbepHNCx1LcnY0mg2V7W5S+LqpH/3TrGit/EXfZaru0ucvngMPjTYm8yFvIAy6JY2Mb5twGWVzVlqMN4TbDg3UNIFpfo8l74A5908r5v9Rd6V80Cws1nNvXcH88L9KpDTNS1VdFbd+2+moXLnSVCDdB+Rx83neToozP6do9nLJKrKTpNEAnz4bSTpufK0bDdvfS0d0T9xM+YiX9COVlVu+5WqNxHNv5otYsd1TNfWocdvzwi7dLTmWmzQRV0bPTKRLN+Q3qX6I8VnK4Zmy87ea2rs7jzBzoEFZ9zYRTe3G6vDwYnXFtBaDH31uA4pAUjCJG0uQxB7stgIJqiX2K2aO8IHX4+OzqnjOQr8l0WbJJkt+kaFyIvmDqo0w8bMsp3dvDMfcCWiCjqY+LAgdDUrCU1hNcFCjEBej99biphjTFccrwiASNnCRJ5qEgCLzY+VZ8vRwRK1CWfU0wAy1woGk8waDHaIlb4HGAlxWoCGbHVKWO0pFMyGt61zQ5UVdMQ1G4hmL8TLoiMS4YijPQ42VJEAVJ4eR76//BIUiK2DV4Huoc3xF1yEuiIGpQ1WVJ5xXT/AMO5X/DwUOJ1/vQ5AxTEESF76iyYJgCNAxDkWXxYxy8dP+7BRJ8ZU8/NSoQ+RY4EFowNymzKEXBm9neFpHvp2XClnXi95sBpqD3bhozRpKwaJiVCaL+kVS43/AAvQOKCvxDeJji4I3LazPtp0HjB1dyN3DgmKDB3gT6pTY94dfqJKjZDHBwIQlogej1kKiIMoRdyHGQF3rCt2b+/gNuEz3ADJGoaLqo0zmeFFU3bK9b+5PBQLVCtR+q4Ce9N/s+7XE+LxV/0nezgVn5OV2gxrqD+W4VaWHF9tMYEtke7TeRkL78JkiTcmV30l09G279PG4TdrS766Af3jpHzznVq/3Zs5ZaO8HscoDpYsrPRftswwoJ5WJadp1cOLiDAPU1e0ozKR3hrqmJuvrSZAtwRXz8PllqWMQuzUl3th7AamROiv11ckuujpjLslAmMIq0TTjZ8k6MKmZewrF84laVslJ03/oyl/xq37dS0XFPymbtzseXERkc58/G8mhs0euDQl4tTx6/B4If/fn1hv50kU/cjdy4e+tdiNeG/y9NU9uNjGqoq5G9OO5FO+e8Qi/i63ngSvPtWPZuu9Iqa+LxUpCDe6P7LELskNIY9EAR7xFoAZqWjXit5JB+9NaqnGWET9YRKpj60xC/87r03OXQNBui4gh6IIlFbd+Iu1azbMkQe7MXUJvP8Qi4/wMFbb/YEQkAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255714222136",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '2',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
