const nodemailer = require('nodemailer');
const mg  = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
      api_key: "09f903d6357ac04a09359c7a49255766-4b1aa784-32dd756f",
      domain: "sandbox678d878f7e784890a6bfab346b57530f.mailgun.org"
    }
    
  }
  const nodemailerMailgun = nodemailer.createTransport(mg(auth));
  const sendMail = (email, subject, message, cb) =>{
    const mailOptions = {
        from: email,
        to: 'dhia12aouichaoui@gmail.com',
        subject,
        text: message
    };
  nodemailerMailgun.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    else {
      console.log(`Response: ${info}`);
    }
 } )}
//  nodemailerMailgun.sendMail( (email, subject, message),{
//     from: email,
//         to: 'dhia12aouichaoui@gmail.com',
//         subject,
//         text: message
//   }, (err, info) => {
//     if (err) {
//       console.log(`Error: ${err}`);
//     }
//     else {
//       console.log(`Response: ${info}`);
//     }
//   });

module.exports.sendMail = sendMail;