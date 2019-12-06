const express = require('express')
const router = express.Router();

const smtp = require('../smtp');

const tidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];
let sluttidspunkter = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02'];

// Render booking.pug og indsætter data i select-boksene
router.get('/booking', (req, res) => {
  res.render('booking', {tid : tidspunkter, sluttid : sluttidspunkter})
})

// Sender en mail til Munhæld og kunden, med booking informationer
// henter funktionerne fra smtp.js
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
  smtp.sendtilkunde(navn,email,dato,telefon,antal,beskrivelse,starttidspunkt,sluttidspunkt),
  res.render('booking', {tid: tidspunkter, sluttid: sluttidspunkter})
})

module.exports = router;




