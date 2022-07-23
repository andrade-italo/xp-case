const express = require('express');
const contaController = require('../controllers/contaController');
const validateGetClient = require('../middleware/validateGetClient');

const router = express.Router();

router.get('/:codCliente', validateGetClient, contaController);

module.exports = router;
