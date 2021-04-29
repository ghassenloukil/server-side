const express = require('express');
const router = express.Router();

const controllers = require('../controllers/user')

      
router.post('/user/create', controllers.createUser);
router.get('/users', controllers.getUsers);
router.post('/login', controllers.findUser);
router.get('/Profile/:email', controllers.getprof)
router.put('/Profile/:id',controllers.updateprof);

       
module.exports = router;
