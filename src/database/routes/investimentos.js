const express = require('express');
const investController = require('../controllers/investController');

const router = express.Router();

router.post('/comprar', investController);

module.exports = router;
