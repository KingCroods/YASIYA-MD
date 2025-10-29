const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~pMBBRBBL#nSf7Td2vdMR83my5KJMcJcA_c9WBG6NkRKPiod3jn_g'
};
