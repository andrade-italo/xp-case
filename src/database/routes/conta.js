const express = require('express');
const {
  getContaController,
  depositoController,
} = require('../controllers/contaController');
const validateGetClient = require('../middleware/validateGetClient');
const { validateSaqueDeposito } = require('../middleware/validateSaqueDeposito');

const router = express.Router();

router.get('/:codCliente', validateGetClient, getContaController);
router.post('/deposito', validateSaqueDeposito, depositoController);

module.exports = router;
