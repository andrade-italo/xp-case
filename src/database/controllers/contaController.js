const { StatusCodes } = require('http-status-codes');

const contaService = require('../services/contaService');

const contaController = async (req, res) => {
  const { codCliente } = req.params;
  const conta = await contaService(codCliente);
  return res.status(StatusCodes.OK).json(conta);
};

module.exports = contaController;
