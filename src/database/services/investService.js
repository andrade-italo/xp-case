const {
  Carteiras, Ativos, Clientes, sequelize,
} = require('../models');

const investService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const t = await sequelize.transaction();
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const findCliente = await Clientes.findOne({
    where: { cod_cliente: codCliente },
  });
  const totalCompra = (findAtivo.valor * qtdeAtivo).toFixed(2);

  if (Number(findCliente.saldo) < totalCompra) { return { message: 'Saldo insuficiente!' }; }
  if (Number(findAtivo.qtdeAtivo) < qtdeAtivo) { return { message: 'Quantidade indisponível' }; }

  try {
    await Ativos.increment(
      { qtde_ativo: -qtdeAtivo },
      { where: { cod_ativo: codAtivo } },
      { transaction: t },
    );

    await Clientes.increment(
      { saldo: -totalCompra },
      { where: { cod_cliente: codCliente } },
      { transaction: t },
    );

    const [[[updateSucess], updateFail]] = await Carteiras.increment(
      { qtde_ativo: +qtdeAtivo },
      { where: { cod_ativo: codAtivo, cod_cliente: codCliente } },
      { transaction: t },
    );

    if (!updateFail) {
      const created = await Carteiras.create(
        { codAtivo, codCliente, qtdeAtivo },
        { transaction: t },
      );
      await t.commit();
      return created;
    }

    await t.commit();
    return updateSucess;
  } catch (e) {
    await t.rollback();
    return { message: 'Algo deu errado' };
  }
};

module.exports = investService;
