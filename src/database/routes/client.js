const express = require('express');
const clientController = require('../controllers/clientController');
const validateGetClient = require('../middleware/validateGetClient');

const router = express.Router();

router.get('/ativos/:codCliente', validateGetClient, clientController);

module.exports = router;
