const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const controllers = require('../controllers/user')
const emailsend= require('../controllers/Mail')

const mailGun = require('nodemailer-mailgun-transport');

      
router.post('/user/create', controllers.createUser);
router.get('/users', controllers.getUsers);
router.post('/login', controllers.findUser);
router.get('/Profile/:email', controllers.getprof)
router.put('/Profile/:id',controllers.updateprof);

       

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
router.post('/sendemail',(req,res,next)=>{
    console.log(req.body)
    
    let data =req.body
    
    const auth = {
        
        auth: {
          api_key: "f0a9606f1bdd1f1ac7dd17a7024f8ec3-4b1aa784-b790fe6f",
          domain: "sandbox3ea2588c717344008700cdb3315efdcc.mailgun.org"
        }}
  
    var transporter = nodemailer.createTransport(mailGun(auth));

   
    var mailOptions = {
    from: data.email,
    to: 'dhia12aouichaoui@gmail.com',
    subject: `Contact name: ${data.name} ,${data.subject}`,
    text: `${data.message}`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    res.send('error') 
    }
    else {
    console.log('Email sent: ' + info.response);
    res.send('Sent Successfully')
    }
    });
    })

module.exports = router;
