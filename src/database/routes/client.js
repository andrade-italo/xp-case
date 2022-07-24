const express = require('express');
const clientController = require('../controllers/clientController');
const { authToken } = require('../middleware/authToken');
const validateGetClient = require('../middleware/validateGetClient');

const router = express.Router();

router.get('/ativos/:codCliente', authToken, validateGetClient, clientController);

module.exports = router;
