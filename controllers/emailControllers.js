const text = require('body-parser/lib/types/text');
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
        from: 'The Academy - Web',
        subject: body.asunto,
        to: body.email,
        html: "<h2>Hola <b>The Academy</b>.</h2>" +
            "<p  style='font-size: 15px'><b>Mi nombre es:</b> " + body.nombre +
            "<br><b>Puedes comunicarte al Whatsapp:</b><a href='https://api.whatsapp.com/send?phone=593" + body.telefono + "&text=*Hola%20te%20escribé%20The%20Academy%20en%20que%20podemos%20ayudarte*'> Enviar un whatsapp</a>" +
            "<br><b>Tipo de servicio es: </b>" + body.tipo +
            "<br><b>Mensaje: </b>" + body.mensaje + "</p>"


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