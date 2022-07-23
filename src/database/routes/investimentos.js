const express = require('express');
const investController = require('../controllers/investController');
const { attributesValidation } = require('../middleware/buyAttributesValidation');

const router = express.Router();

router.post('/comprar', attributesValidation, investController);

module.exports = router;
