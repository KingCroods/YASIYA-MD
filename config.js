const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~0A5XDb4Z#kp9XkXXshnan17P-xwZr7DzdCd_Ig1pdAHQrm_4-SG8'
};
