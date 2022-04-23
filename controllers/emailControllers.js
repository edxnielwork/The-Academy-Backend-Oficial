const { request } = require('express');
const { response } = require('express');
const {} = require('express')
const nodeMailer = require('nodemailer');


const sendEmail = (req = request, resp = response) => {
    let body = req.body;


    let config = nodeMailer.createTransport({
        host: 'mail.the-academy-dvr.com',
        post: 465,
        auth: {
            user: 'info@the-academy-dvr.com',
            pass: '3dxuy3lvxl398@CC'
        }
    });

    const option = {
        from: 'The Academy',
        subject: body.nombre,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(option, function(error, result) {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        });
    });
}
module.exports = {
    sendEmail
}