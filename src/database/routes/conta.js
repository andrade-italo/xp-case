const express = require('express');
const {
  getContaController,
  depositoController,
  saqueController,
} = require('../controllers/contaController');
const { authToken } = require('../middleware/authToken');
const validateGetClient = require('../middleware/validateGetClient');
const { validateSaqueDeposito } = require('../middleware/validateSaqueDeposito');

const router = express.Router();

router.get('/:codCliente', authToken, validateGetClient, getContaController);
router.post('/deposito', authToken, validateSaqueDeposito, depositoController);
router.post('/saque', authToken, validateSaqueDeposito, saqueController);

module.exports = router;
