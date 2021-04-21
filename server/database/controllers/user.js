const User = require('../models/index.js').user
const auth = require('../middleware/auth')

module.exports = {
    getUser:   (req, res) => {
        User.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getUserById :  (req,res) => { 
     User.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addUser :  (req,res) => {
   const  user = new User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       password: auth.createHash(req.body.password),
     
    })
     user.save(() => {
    res.send(user)
})
},

 editUser :  (req,res) => {
     User.updateOne(  {'_id': req.params.id },  req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
},


 deleteUserById :   (req,res) => {
     User.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"User deleted successfully"})
     })
             },

findUser :  (req, res) => {

                    console.log(req.body.email.toString())
                     User.find({'email':req.body.email.toString()},(err,result)=>{
                        if(err){
                            console.log(err)
                            res.status(500).send('error')
                            return
                        }

                        
                      if(result.length >0 && result[0].password == auth.createHash(req.body.password)){

                         var session = auth.RandomString(32)

                        auth.CreateSession(req,res,result[0]._id,session,result[0].role)

                      }else{
                        res.send({"message":"password wrong"});
                      }
                      
                   })
                   
                  
              
                  
           }
            }




   