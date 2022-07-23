const { Clientes } = require('../models');

const contaService = async (codCliente) => {
  const findSaldo = await Clientes.findOne({
    where: { cod_cliente: codCliente },
    attributes: ['codCliente', 'saldo'],
  });
  return findSaldo;
};
module.exports = contaService;
