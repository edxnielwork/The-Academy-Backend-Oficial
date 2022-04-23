const { request } = require('express');
const { response } = require('express');
const {} = require('express')
const nodeMailer = require('nodemailer');


const sendEmail = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        secure: false,
        auth: {
            user: 'theacademy.dvr@gmail.com',
            pass: '3dxuy3lvxl398@TA'
        }
    });

    const option = {
        from: 'The Academy',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(option, function(error, result) {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result,
        });
    });
}


module.exports = {
    sendEmail
}