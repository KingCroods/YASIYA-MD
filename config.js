const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FUwRxKxI#iD0lr9FB6pTz66zZ7UuJ8eGwi3-JwleRd4Liilmn9Rs'
};
