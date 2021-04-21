const express = require('express');
const router = express.Router();

const controllers = require('../controllers/user')

      
router.post('/user/create', controllers.createUser);
router.get('/users', controllers.getUsers);
router.post('/login', controllers.findUser);

       
module.exports = router;
