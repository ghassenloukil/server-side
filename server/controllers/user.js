// const User = require('../models/index.js').user
// const auth = require('../middleware/auth')

// module.exports = {
//     getUser:   (req, res) => {
//         User.find({}, (err, result) => {
//             if (err) {
//                 console.error(err)
//                 return
//          } 
//         res.send(result)
//     })
// },

//  getUserById :  (req,res) => { 
//      User.findById(req.params.id,(err,result) => {
//         res.send(result)
//     })
// },


// addUser :  (req,res) => {
//    const  user = new User({
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        email: req.body.email,
//        password: auth.createHash(req.body.password),
     
//     })
//     console.log(user);
//      user.save(() => {
//     res.send(user)
// })
// },

//  editUser :  (req,res) => {
//      User.updateOne(  {'_id': req.params.id },  req.body, (err, result) => {
//          if (err) {
//              res.status(400).send('id dont exist')
//              return
//          }
//          res.status(200).send('message updated')
//      })
// },


//  deleteUserById :   (req,res) => {
//      User.deleteOne({ '_id': req.params.id }, (err, result) => {
//          if (err) {
//              res.status(400).send('id not found')
//              return
//          }
//          res.status(200).send({"message":"User deleted successfully"})
//      })
//              },

// findUser :  (req, res) => {

//                     console.log(req.body.email.toString())
//                      User.find({'email':req.body.email.toString()},(err,result)=>{
//                         if(err){
//                             console.log(err)
//                             res.status(500).send('error')
//                             return
//                         }

                        
//                       if(result.length >0 && result[0].password == auth.createHash(req.body.password)){

//                          var session = auth.RandomString(32)

//                         auth.CreateSession(req,res,result[0]._id,session,result[0].role)

//                       }else{
//                         res.send({"message":"password wrong"});
//                       }
                      
//                    })
                   
                  
              
                  
//            }
//             }
const nodemailer = require('nodemailer');
const mg  = require('nodemailer-mailgun-transport');
const { sequelize } = require('../database/order') 
const Users =require('../database/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../models/index.js')
// const Order = db.Order


// const order= db.Order
module.exports.createUser = async (req, res)=>{
    //CHECK IF THE USER IS ALREADY IN THE DATABASE
  const emailExist = await Users.findOne({ where: {email: req.body.email} });
  console.log("hhhhhh", req.body.email);
  if (emailExist) return res.send("Email already exists");
    //HASH THE PASSWORD BEFORE SAVING
    const hash = bcrypt.hashSync(req.body.password, 10)
  //CRATE A NEW USER
  const newUser = await Users.create({ 
      username: req.body.username,
      email: req.body.email,
      password: hash,
      points: 0
  });
    try {
        const saveUser = await newUser.save();
        console.log();
        res.json(saveUser);
    }catch (err) {
        console.log(err);
    }
}



module.exports.findUser = async (req, res) => {
  if (req.body.email === "admin" && req.body.password === "admin") {
    // res.send("admin");
    const token = jwt.sign({ _id: 00 }, "fghfghrtfjyuuikyufiy");
    res.send({ message: "admin", token: token });
    // res.header("auth-token", token);
    return
  }
    try {
        const user = await Users.findOne({ where: {email: req.body.email} });
        if (!user) {
          console.log("user not found");
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
          // create and assign a token
          const token = jwt.sign({ _id: user._id }, "fghfghrtfjyuuikyufiy");
          res.header("auth-token", token);
          res.send({ message: "success", token: token });
        } else {
          res.send("Email or password incorrect");
        }
      } catch (err) {
        res.send(err);
      }
    }



module.exports.getUsers = async (req, res)=>{
    try {
        // const Allusers = await Users.findAll({include: [{model: db.Order}]});
        // res.send(Allusers);
      const user = await sequelize.query("select * from orders u inner join users o on u.user_id = o.userId")
      res.send(user);
    }catch (err) {
        console.log(err);
    }
}

module.exports.AllUsers = async (req, res)=>{
  try {
      const Allusers = await Users.findAll();
      res.send(Allusers);
  }catch (err) {
      console.log(err);
  }
}

module.exports.getOneUsers = async (req, res)=>{
  try {
      const user = await Users.findAll({where : {email : req.params.email}});
      res.send(user);
  }catch (err) {
      console.log(err);
  }
}

module.exports.getprof=async (req,res)=>{
  try{
    const userprof=await Users.findOne({where:{email: req.params.email}})
    res.send(userprof)
    
  }catch(err){
    console.log(err)}
}

module.exports.updateprof= async function (req, res) {
  const prod = {
    email: req.body.email,
    username: req.body.username,
  };
  try {
    let user = await Users.findOne({where:{ id: req.params.id }})
    let update = await user.update(prod)
    res.send(update);
  } catch (err) {
    res.send(err);
  }
}


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

module.exports.sendMail = sendMail;


module.exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({ where: {userId: req.params.userId} })
    console.log("delete user", user);
  //  user.destroy();
  //  res.send('deleted')
  }catch (err) {
    res.send(err)
  }
}



   