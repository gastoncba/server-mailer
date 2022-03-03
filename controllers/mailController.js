const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
const {user, pass} = process.env;

const sendEmail = async (req, res) => {
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, 
        secure: false,
        auth: {
          user: user, 
          pass: pass, 
        },
    });
    
    transporter.verify()
        .then(()=>console.log('Listo para enviar email...'))
        .catch((e)=>console.log('Ocurrio un error: ' + e))

    const {name, email, message}  = req.body
    try {
        await transporter.sendMail({
            from: `${user}`, 
            to: "gaston.cba97@gmail.com", 
            subject: "Hola como estas?! vimos tu Portfolio ✔", 
            html: `<h1>Vimos tu portfolio</h1><br/>
                    <p>Nombre: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>${message}</p>`, 
          })
          res.status(200).json({message: 'Enviado'})
    } catch (error) {
        return res.status(400).json({message: 'error, detalle: ' + error})
    }
}

module.exports = {sendEmail}