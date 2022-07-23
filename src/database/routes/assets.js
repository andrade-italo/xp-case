const express = require('express');
const assetsController = require('../controllers/assetsController');
const validateGetAssets = require('../middleware/validateGetAssets');

const router = express.Router();

router.get('/ativos/:codAtivo', validateGetAssets, assetsController);

module.exports = router;
