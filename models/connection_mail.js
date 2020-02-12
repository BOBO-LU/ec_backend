const config = require('../config/development_config');
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jonathan200415@gmail.com', //gmail account
        pass: 'jo0917222169' //gmail password
    }
});