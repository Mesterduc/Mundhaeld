const express = require('express')
const router = express.Router();
const nodemailer = require("nodemailer");


router.get('/booking', (req, res) => {
    res.render('booking', {tid : tidspunkter})
})


router.post('', (req, res) => {
  sendmail().catch().then(console.log(Error)),
  readInputs(),
  res.render('booking', {tid: tidspunkter})
  
})
module.exports = router;


//-------- Tidsvælger
const tidspunkter = ['12-14', '14-16','16-18','18-20','20-22','22-00','00-02']
let navn;;
let email;
let telefon;
let antal;
let beskrivelse;
let dato;
let tidspunkt;

function readInputs(){
  navn = document.getElementById('bName')
  email = document.getElementById('bEmail')
  telefon = document.getElementById('bPhone')
  antal = document.getElementById('bPersons')
  beskrivelse = document.getElementById('bComment')
  dato = document.getElementById('datepicker')
  tidspunkt = document.getElementById('timepicker')

}

//-------- SMTP Mails
async function sendmail() {
  
  // skaber genbruglig transportør-object med SMTP transport
  let transporter = await nodemailer.createTransport({
    
    service: 'gmail',
      port: 587,
      secure: true, // sand for port 465, falsk for anden port
      auth: {
        user: 'mundhaelddeveloper@gmail.com', 
        pass: 'lkbsomdrnbnqvzos' 
      },
      tls:{
          rejectUnauthorized:false,
      }
    });
  
    // send mail med specificeret transport-object
    let ctb = transporter.sendMail({
      from: `"${navn}" <${email}>`, // sender address
      to: "kevinjoergensen@outlook.com", // list of receivers
      subject: `Reservation - d: ${dato} kl: ${tidspunkt}`, // Subject line
      text: `${beskrivelse} ${antal} ${telefon}`, // plain text body
      html: "<b>Hello world?</b>" // html body
    });
  
    console.log(`Message sent to: ${ctb.to}`);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
}


