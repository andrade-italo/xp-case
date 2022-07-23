const { StatusCodes } = require('http-status-codes');

const clientService = require('../services/clientService');

const clientController = async (req, res) => {
  const { codCliente } = req.params;
  const getAtivosByClient = await clientService(codCliente);
  return res.status(StatusCodes.OK).json(getAtivosByClient);
};

module.exports = clientController;
