const express = require('express');
const router = express.Router();
const controllers = require('../controllers/parking');

router.post('/parking/create', controllers.createParking)
router.get('/parkings', controllers.getParkings)
module.exports = router;