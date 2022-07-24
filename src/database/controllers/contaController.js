const { StatusCodes } = require('http-status-codes');

const { depositoService, getContaService, saqueService } = require('../services/contaService');

const getContaController = async (req, res) => {
  const { codCliente } = req.params;
  const conta = await getContaService(codCliente);
  return res.status(StatusCodes.OK).json(conta);
};

const depositoController = async (req, res) => {
  const { codCliente, valor } = req.body;
  const deposito = await depositoService(codCliente, valor);
  if (deposito.message) return res.status(500).json(deposito);
  return res.status(StatusCodes.OK).json(deposito);
};

const saqueController = async (req, res) => {
  const { codCliente, valor } = req.body;
  const saque = await saqueService(codCliente, valor);
  if (saque.message) return res.status(500).json(saque);
  return res.status(StatusCodes.OK).json(saque);
};

module.exports = { getContaController, depositoController, saqueController };
