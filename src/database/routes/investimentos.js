const express = require('express');
const investController = require('../controllers/investController');
const investSellController = require('../controllers/investSellController');
const { attributesValidation } = require('../middleware/buyAttributesValidation');
const validateData = require('../middleware/validateData');

const router = express.Router();

router.post('/comprar', attributesValidation, validateData, investController);
router.post('/vender', attributesValidation, validateData, investSellController);

module.exports = router;
