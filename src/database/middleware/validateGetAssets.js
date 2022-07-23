const { StatusCodes } = require('http-status-codes');
const { Ativos } = require('../models');

module.exports = async (req, res, next) => {
  const { codAtivo } = req.params;
  const ativo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  if (!ativo) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Ativo não encontrado' });
  }
  return next();
};
