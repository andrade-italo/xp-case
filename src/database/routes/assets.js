const express = require('express');
const assetsController = require('../controllers/assetsController');
const validateGetAssets = require('../middleware/validateGetAssets');
const { authToken } = require('../middleware/authToken');

const router = express.Router();

router.get('/ativos/:codAtivo', validateGetAssets, assetsController.assetsController);
router.post('/ativos', authToken, assetsController.addAtivoController);

module.exports = router;
