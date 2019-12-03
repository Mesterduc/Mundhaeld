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
        <body style="width:100%;">
  <div class="quick-nav" style="margin: auto; border: solid 2px #800000;
  width: 80%;">
    <div style="padding-top:15px;padding-bottom:15px;padding-right:0px;padding-left:0px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#e7e7e7; background-color: #ff8a00; font-family:Helvetica, Arial, sans-serif;text-align:center;line-height:1.5em; ">
      <table style="align: center; width:100%;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;">
        <tbody>
          <tr align="center" style="width:80%;">
            <td style="width:20%;border-collapse:collapse;">
              <p style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;"><b>Reservation fra:</b>&nbsp; ${navn}</p>
            </td>
            <td style="width:20%;border-collapse:collapse;">
              <a href="http://localhost:8000/"
                style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;"><img src="http://mundhaeld.dk/____impro/1/onewebmedia/fb_profil_v2.png?etag=W%2F%2228edf-5d6d59c9%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=200%2B200" style="width:40px; height: auto"></a>
            </td>
            <td style="width:20%;border-collapse:collapse;">
              <a href="http://localhost:8000/admin" style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;">Gå til administration</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="padding: 20px">
        <p><b>Ny reservationsanmodning modtaget med følgende oplysninger: </b></p>
        <p><b>Navn: </b>${navn} </p>
        <p><b>Email: </b>${email}</p>
        <p><b>Dato: </b>${dato}</p>
        <p><b>Tlfnr: </b>${telefon}</p>
        <p><b>Antal: </b>${antal}</p>
        <p><b>Kommentar: </b>${beskrivelse}</p>
        <p><b>Start: </b>${starttidspunkt}:00</p>
        <p><b>Slut: </b>${sluttidspunkt}:00</p>
    </div>
  </div>
  <footer></footer>
</body>
        ` // html body
      })
    
      console.log(`Message sent to: ${email}`);
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
        <body style="width:100%;">
  <div class="quick-nav" style="margin: auto; border: solid 2px #800000;
  width: 80%;">
    <div style="padding-top:15px;padding-bottom:15px;padding-right:0px;padding-left:0px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#e7e7e7; background-color: #ff8a00; font-family:Helvetica, Arial, sans-serif;text-align:center;line-height:1.5em; ">
      <table style="align: center; width:100%;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;">
        <tbody>
          <tr align="center" style="width:80%;">
            <td style="width:20%;border-collapse:collapse;">
              <a href="http://localhost:8000/sortiment" style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;">Se vores sortiment</a>
            </td>
            <td style="width:20%;border-collapse:collapse;">
              <a href="http://localhost:8000/"
                style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;"><img src="http://mundhaeld.dk/____impro/1/onewebmedia/fb_profil_v2.png?etag=W%2F%2228edf-5d6d59c9%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=200%2B200" style="width:40px; height: auto"></a>
            </td>
            <td style="width:20%;border-collapse:collapse;">
              <a href="https://g.page/Mundhaeld?share" style="text-decoration:none;font-weight:normal;color:white;font-size:22px !important;">Find vej</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="padding: 20px">
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
    </div>
  </div>
  <footer></footer>
</body>
        ` // html body
      });
    
      console.log(`Message sent to: ${email}`);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
  }