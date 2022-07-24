const express = require('express');
const investController = require('../controllers/investController');
const investSellController = require('../controllers/investSellController');
const { authToken } = require('../middleware/authToken');
const { attributesValidation } = require('../middleware/buyAttributesValidation');
const validateData = require('../middleware/validateData');

const router = express.Router();

router.post('/comprar', authToken, attributesValidation, validateData, investController);
router.post('/vender', authToken, attributesValidation, validateData, investSellController);

module.exports = router;
