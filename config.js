const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~pBxyECrC#m7jbUFdP3VEjiv99TFnkTdSd_Hff7HiNW72m5E2WQTU'
};
