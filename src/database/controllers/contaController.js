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
  return res.status(StatusCodes.OK).json(deposito);
};

module.exports = { getContaController, depositoController };
