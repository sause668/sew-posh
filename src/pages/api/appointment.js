var nodemailer = require('nodemailer');

export default async function handler(req, res) {
    
    const ap = JSON.parse(req.body);
    

    //Set Email Connection
    var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, 
        auth: {
            user:'soulsitescoding@zohomail.com',
            pass:'Sause323'
        }
    });

    //Email Info
    var mailOptions = {
    from: 'soulsitescoding@zohomail.com',
    to: 'reynoldskamara@yahoo.com',
    subject: `Consultation Request from ${ap.spFirstName} ${ap.spLastName}`,
    text: `${ap.spFirstName} ${ap.spLastName}\n${ap.spPhoneNumber}\n${ap.spEmail}\n\n${ap.spJobType}\n\n${ap.spMessage}`
    };

    //Send Email
    var status = true;

    await new Promise((res,rej) => {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                rej(error);
                status = false;
            } else {
                console.log('Email sent: ' + info.response);
                res(info);
            }
        });
    })
    //Send Response
    res.status(200).json({status: status});
}