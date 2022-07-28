const express = require('express');
const assetsController = require('../controllers/assetsController');
const validateGetAssets = require('../middleware/validateGetAssets');

const router = express.Router();

router.get('/ativos/:codAtivo', validateGetAssets, assetsController.assetsController);
router.post('/ativos', assetsController.addAtivoController);

module.exports = router;
