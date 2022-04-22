const express = require('express');
const app = express();

let sendMail = require('../controllers/emailControllers');

app.post('/sendEmail', sendMail.sendEmail);

module.exports = app;