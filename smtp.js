const nodemailer = require("nodemailer");

//-------- SMTP Mails
exports.sendtilmads = async function sendmail(navn, email, dato, telefon, antal, beskrivelse,starttidspunkt,sluttidspunkt) {
  
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
  
  
  