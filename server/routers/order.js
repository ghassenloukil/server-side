const express = require('express');
const router = express.Router();
const controllers = require('../controllers/order');

router.post('/order/create', controllers.createOrder)
router.get('/orders', controllers.getOrders)
module.exports = router;