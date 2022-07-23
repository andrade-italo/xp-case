const { StatusCodes } = require('http-status-codes');

const assetsService = require('../services/assetsService');

const assetsController = async (req, res) => {
  const { codAtivo } = req.params;
  const assets = await assetsService(codAtivo);
  return res.status(StatusCodes.OK).json(assets);
};

module.exports = assetsController;
