const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.get('/ativos/:codCliente', clientController);

module.exports = router;
