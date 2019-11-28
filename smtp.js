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
        to: "mundhaelddeveloper@gmail.com", // list of receivers
        replyTo: `${email}`,
        subject: `Ny reservation - d: ${dato}, fra ${navn}.`, // Subject line
        text: `Navn: ${navn}
        Email: ${email}
        Dato: ${dato}
        Tlfnr: ${telefon}
        Antal: ${antal}
        Kommentar: ${beskrivelse}
        Start: ${starttidspunkt}:00
        Slut: ${sluttidspunkt}:00`, // plain text body
        html: `
        <p><b>Navn: </b>${navn} </p>
        <p><b>Email: </b>${email}</p>
        <p><b>Dato: </b>${dato}</p>
        <p><b>Tlfnr: </b>${telefon}</p>
        <p><b>Antal: </b>${antal}</p>
        <p><b>Kommentar: </b>${beskrivelse}</p>
        <p><b>Start: </b>${starttidspunkt}:00</p>
        <p><b>Slut: </b>${sluttidspunkt}:00</p>
        ` // html body
      });
    
      console.log(`Message sent to: ${user}`);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
  }
  
  
  exports.sendtilkunde = async function sendmail(navn, email, dato, telefon, antal, beskrivelse,starttidspunkt,sluttidspunkt) {
  
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
        from: `"Mundhæld" <mundhaelddeveloper@gmail.com>`, // sender address
        to: `${email}`, // list of receivers
        subject: `Tak ${navn}, for din reservation d. ${dato}`, // Subject line
        text: `
        Tak for din reservation. Vi vil kigge på din reservation og kontakte dig snarest muligt.
        Du har reserveret med følgende oplysninger:
        Navn: ${navn}
        Email: ${email}
        Dato: ${dato}
        Tlfnr: ${telefon}
        Antal: ${antal}
        Kommentar: ${beskrivelse}
        Start: ${starttidspunkt}:00
        Slut: ${sluttidspunkt}:00`, // plain text body
        html: `
        <p><b>Tak for din reservation. Vi vil kigge på din reservation og kontakte dig snarest muligt.</b></p>
        <p>Du har reserveret med følgende oplysninger:</p>
        <p><b>Navn: </b>${navn} </p>
        <p><b>Email: </b>${email}</p>
        <p><b>Dato: </b>${dato}</p>
        <p><b>Tlfnr: </b>${telefon}</p>
        <p><b>Antal: </b>${antal}</p>
        <p><b>Kommentar: </b>${beskrivelse}</p>
        <p><b>Start: </b>${starttidspunkt}:00</p>
        <p><b>Slut: </b>${sluttidspunkt}:00</p>
        ` // html body
      });
    
      console.log(`Message sent to: ${email}`);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
  }