const express = require('express');
const router = express.Router();
// const controllers = require('../controllers/index.js')
const controllers = require('../controllers/user')

// router.get('/', controllers.user.getUser);

// router.get('/:id', controllers.user.getUserById);     
      
router.post('/user/create', controllers.createUser);
router.get('/users', controllers.getUsers);
      
// router.put('/:id', controllers.user.editUser);

// router.delete('/:id', controllers.user.deleteUserById);

// router.post('/signin', controllers.user.findUser)
       
module.exports = router;
