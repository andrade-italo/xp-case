const { StatusCodes } = require('http-status-codes');

const investSellService = require('../services/investSellService');

const investController = async (req, res) => {
  const executeBuyService = await investSellService(req.body);
  if (executeBuyService.message) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(executeBuyService);
  }
  return res.status(StatusCodes.CREATED).json(executeBuyService);
};

module.exports = investController;
