const express = require('express');
const router = express.Router();
const controllers = require('../controllers/order');

router.post('/order/create', controllers.createOrder)
// router.get('/parkings', controllers.getParkings)
module.exports = router;