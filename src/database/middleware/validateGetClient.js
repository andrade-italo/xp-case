const { StatusCodes } = require('http-status-codes');
const { Clientes } = require('../models');

module.exports = async (req, res, next) => {
  const { codCliente } = req.params;
  const cliente = await Clientes.findOne({ where: { cod_cliente: codCliente } });
  if (!cliente) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Cliente não encontrado' });
  }
  if (Number(codCliente) !== req.user.codCliente) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Acesso não autorizado' });
  return next();
};
