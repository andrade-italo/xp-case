const { StatusCodes } = require('http-status-codes');
const { Ativos, Clientes } = require('../models');

module.exports = async (req, res, next) => {
  const { codAtivo, codCliente } = req.body;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const findCliente = await Clientes.findOne({ where: { cod_cliente: codCliente } });

  if (!findAtivo) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Ativo não encontrado' });
  }

  if (!findCliente) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Cliente não encontrado' });
  }
  return next();
};
