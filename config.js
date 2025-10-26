const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~kUolARDY#mj4gfH09Jq_m2aPJs89d8jm50n-KAh-VHjZXk6ymakI'
};
