const { Clientes } = require('../models');

const getContaService = async (codCliente) => {
  const findSaldo = await Clientes.findOne({
    where: { cod_cliente: codCliente },
    attributes: ['codCliente', 'saldo'],
  });
  return findSaldo;
};

const incrementValue = async (codCliente, valor) => {
  const depositoExecute = await Clientes.increment(
    { saldo: valor },
    { where: { cod_cliente: codCliente } },
  );
  return !!depositoExecute;
};

const depositoService = async (codCliente, valor) => incrementValue(codCliente, valor);

const saqueService = async (codCliente, valor) => {
  const { saldo } = await getContaService(codCliente);
  if (saldo < valor) return { message: 'Saldo insuficiente' };
  return incrementValue(codCliente, -valor);
};
module.exports = { depositoService, getContaService, saqueService };
