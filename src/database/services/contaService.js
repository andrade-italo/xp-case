const { Clientes, sequelize } = require('../models');

const getContaService = async (codCliente) => {
  const findSaldo = await Clientes.findOne({
    where: { cod_cliente: codCliente },
    attributes: ['codCliente', 'saldo'],
  });
  return findSaldo;
};

const incrementValue = async (codCliente, valor) => {
  const t = await sequelize.transaction();
  try {
    const depositoExecute = await Clientes.increment(
      { saldo: valor },
      { where: { cod_cliente: codCliente } },
      { transaction: t },
    );

    await t.commit();
    return !!depositoExecute;
  } catch (e) {
    await t.rollback();
    return { message: 'Algo deu errado' };
  }
};

const depositoService = async (codCliente, valor) => incrementValue(codCliente, valor);

const saqueService = async (codCliente, valor) => {
  const { saldo } = await getContaService(codCliente);
  console.log(typeof saldo, typeof valor);
  if (Number(saldo) < Number(valor)) return { message: 'Saldo insuficiente' };
  return incrementValue(codCliente, -valor);
};
module.exports = { depositoService, getContaService, saqueService };
