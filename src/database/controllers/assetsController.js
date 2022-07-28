const { StatusCodes } = require('http-status-codes');

const assetsService = require('../services/assetsService');

const assetsController = async (req, res) => {
  const { codAtivo } = req.params;
  const assets = await assetsService.assetsService(codAtivo);
  return res.status(StatusCodes.OK).json(assets);
};
const addAtivoController = async (req, res) => {
  const payload = req.body;
  const assets = await assetsService.addAtivo(payload);
  return res.status(StatusCodes.CREATED).json(assets);
};

module.exports = { assetsController, addAtivoController };
