var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

console.log(req.body)

var nombre = req.body.nombre;
var email = req.email;
var mensaje =req.body.mensaje;

var obj = {
to: 'mlolaserrano1@icloud.com',
subject:'Contacto desde la Web',
html: nombre + " " + apellido + " se contacto a traves y quiere mas info a este correo: " + email + ". <br> Ademas, hizo elsiguiente comentario: " + mensaje +" . <br>"

}

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS

}})



var info = await transporter.sendMail(obj);

res.render('index', {
  messege: 'Mensaje enviado correctamente',
});

});


module.exports = router;
