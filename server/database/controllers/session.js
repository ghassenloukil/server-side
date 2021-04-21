const Session = require('../models/index.js').session
const User = require('../controllers/index').user

module.exports = {
    find:   (cookie) => {
        Session.find({"session":cookie}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        return result
    })
},

 getSessionCheck :  (req,res) => { 
     console.log(req.body)
     Session.find({"session":req.body.cookie},(err,result) => {
         if(err){
             console.log(err)
             res.status(500).send()
             return
         }
         if(result.length >0){
             req.params.id = result[0].userId
             User.getUserById(req,res)
         }else{
            res.send({"message":"fail"})
         }
        
    })
},


addSession :  (id,session) => {
   var  sessionAdd = new Session({
       userId: id,
       session: session,
       date: new Date(Date.now()),
    })
    sessionAdd.save(() => {
        console.log('session saved')
})
},

 editSession :  (req,res) => {
     Session.updateOne({ '_id': req.params.id }, req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
        
    
},


 deleteSessionById :   (req,res) => {
     Session.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"Session deleted successfully"})
     })
        
    
    }
}



