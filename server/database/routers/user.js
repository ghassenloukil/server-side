const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')

router.get('/', controllers.user.getUser);

router.get('/:id', controllers.user.getUserById);     
      
router.post('/create', controllers.user.addUser);
      
router.put('/:id', controllers.user.editUser);

router.delete('/:id', controllers.user.deleteUserById);

router.post('/signin', controllers.user.findUser)
       
module.exports = router;
