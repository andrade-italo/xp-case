const { StatusCodes } = require('http-status-codes');

const investService = require('../services/investService');

const investController = async (req, res) => {
  const executeBuyService = await investService(req.body);
  res.status(StatusCodes.CREATED).json(executeBuyService);
};

module.exports = investController;
