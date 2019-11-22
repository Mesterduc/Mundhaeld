const express = require('express')
const router = express.Router();
const nodemailer = require("nodemailer");


router.get('/booking', (req, res) => {
    res.render('booking', {tid : tidspunkter})
})


router.post('/booking', (req, res) => {
  res.send('booking', {tid : tidspunkter})
})
module.exports = router;


//Tidsvælger
const tidspunkter = ['12-14', '14-16','16-18','18-20','20-22','22-00','00-02']


//-------- SMTP Mails
// async..await is not allowed in global scope, must use a wrapper
async function sendmail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = await nodemailer.createTransport({
    //host: "smtp.gmail.com",
    service: 'gmail',
      port: 587,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'mundhaelddeveloper@gmail.com', // generated ethereal user
        pass: 'lkbsomdrnbnqvzos' // generated ethereal password
      },
      tls:{
          rejectUnauthorized:false,
//          secureProtocol: "TLSv1_method"

      }
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Kevin" <mundhaelddeveloper@gmail.com>', // sender address
      to: "kevinjoergensen@outlook.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });
  
    console.log("Message sent: yabitch");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendmail().then().catch(console.log('lort'))
