const express = require('express')
const router = express.Router();
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const smtp = require('../smtp');

const bookingpug = fs.readFileSync("./views/booking.pug")
const document = new JSDOM(bookingpug);
let window = document.window;
const tidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];
let sluttidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];

router.get('/booking', (req, res) => {
  res.render('booking', {tid : tidspunkter, sluttid : sluttidspunkter})
  //res.render('booking', {sluttid : sluttidspunkter})
})

router.post('/booking', (req, res) => {
  let navn = req.body.navn
  let email = req.body.email
  let telefon = req.body.telefonnummer
  let antal = req.body.antalperson
  let beskrivelse = req.body.beskrivelse
  let dato = req.body.dato
  

  let starttidspunkt = req.body.starttimepicker
  let sluttidspunkt = req.body.sluttimepicker
  smtp.sendtilmads(navn,email,dato,telefon,antal,beskrivelse,starttidspunkt,sluttidspunkt),
  res.render('booking', {tid: tidspunkter, sluttid: sluttidspunkter})
  //res.render('booking', {sluttid: sluttidspunkter})
})

module.exports = router;


//-------- Tidsvælger

starttid = window.document.getElementsByName('starttimepicker');
window.addEventListener("change", ændreTid())
function ændreTid() {
  sluttidspunkter = [];
  for (let i = 5; i < tidspunkter.length; i++) {
    sluttidspunkter.push(tidspunkter[i]); 
  }
}


