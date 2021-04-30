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
          api_key: "09f903d6357ac04a09359c7a49255766-4b1aa784-32dd756f",
          domain: "sandbox678d878f7e784890a6bfab346b57530f.mailgun.org"
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
