const express = require('express')
const router = express.Router();
const nodemailer = require("nodemailer");
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const bookingpug = fs.readFileSync("./views/booking.pug")
const document = new JSDOM(bookingpug);
let window = document.window;

router.get('/booking', (req, res) => {
  res.render('booking', {tid : tidspunkter, sluttid : sluttidspunkter})
  //res.render('booking', {sluttid : sluttidspunkter})
})

router.post('/booking', (req, res) => {
  navn = req.body.navn
  email = req.body.email
  telefon = req.body.telefonnummer
  antal = req.body.antalperson
  beskrivelse = req.body.beskrivelse
  dato = req.body.dato
  

  starttidspunkt = req.body.starttimepicker
  sluttidspunkt = req.body.sluttimepicker

  sendmail(),
  res.render('booking', {tid: tidspunkter, sluttid: sluttidspunkter})
  //res.render('booking', {sluttid: sluttidspunkter})
})

module.exports = router;


//-------- Tidsvælger
const tidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];
let sluttidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];
let navn ="";
let email = "";
let telefon = "";
let antal = "";
let beskrivelse = "";
let dato = "";
let starttidspunkt = "";
let sluttidspunkt;
//document.getElementsByName('starttidspunkt').selectedIndex

starttid = window.document.getElementsByName('starttimepicker');
window.addEventListener("change", ændreTid())
function ændreTid() {
  sluttidspunkter = [];
  for (let i = 5; i < tidspunkter.length; i++) {
    sluttidspunkter.push(tidspunkter[i]); 
  }
}

function change(){
  console.log("sutmiglige");
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
      subject: `Reservation - d: ${dato}`, // Subject line
      text: `Navn: ${navn}
      Email: ${email}
      Dato: ${dato}
      Tlfnr: ${telefon}
      Antal: ${antal}
      Kommentar: ${beskrivelse}
      Start: ${starttidspunkt}
      Slut: ${sluttidspunkt}`, // plain text body
      html: `
      <p><b> Navn: </b>${navn} </p>
      <p><b> Email: </b>${email}</p>
      <p><b>Dato: </b>${dato}</p>
      <p><b>Tlfnr: </b>${telefon}</p>
      <p><b>Antal: </b>${antal}</p>
      <p><b>Kommentar: </b>${beskrivelse}</p>
      <p><b>Start: </b>${starttidspunkt}</p>
      <p><b>Slut: </b>${sluttidspunkt}</p>
      ` // html body
    });
  
    console.log(`Message sent to: ${email}`);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
}


