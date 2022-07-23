const { StatusCodes } = require('http-status-codes');

const investSellService = require('../services/investSellService');

const investSellController = async (req, res) => {
  const executeSellService = await investSellService(req.body);
  if (executeSellService.message) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(executeSellService);
  }
  return res.status(StatusCodes.CREATED).json(executeSellService);
};

module.exports = investSellController;
