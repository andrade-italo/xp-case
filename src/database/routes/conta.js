const express = require('express');
const {
  getContaController,
  depositoController,
  saqueController,
} = require('../controllers/contaController');
const validateGetClient = require('../middleware/validateGetClient');
const { validateSaqueDeposito } = require('../middleware/validateSaqueDeposito');

const router = express.Router();

router.get('/:codCliente', validateGetClient, getContaController);
router.post('/deposito', validateSaqueDeposito, depositoController);
router.post('/saque', validateSaqueDeposito, saqueController);

module.exports = router;
