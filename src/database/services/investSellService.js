const {
  Carteiras, Ativos, Clientes, sequelize,
} = require('../models');

const investSellService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const totalCompra = (findAtivo.valor * qtdeAtivo).toFixed(2);
  const t = await sequelize.transaction();

  const findCarteira = await Carteiras.findOne(
    { where: { cod_ativo: codAtivo, cod_cliente: codCliente } },
  );

  if (!findCarteira) {
    return { message: 'Não existe o ativo na sua carteira' };
  }
  if (findCarteira.qtdeAtivo < qtdeAtivo) {
    return { message: 'A quantidade do ativo é insuficiente' };
  }
  try {
    await Ativos.increment(
      { qtde_ativo: +qtdeAtivo },
      { where: { cod_ativo: codAtivo } },
      { transaction: t },

    );

    await Clientes.increment(
      { saldo: +totalCompra },
      { where: { cod_cliente: codCliente } },
      { transaction: t },
    );

    const [[[updateCarteira]]] = await Carteiras.increment(
      { qtde_ativo: -qtdeAtivo },
      { where: { cod_ativo: codAtivo, cod_cliente: codCliente } },
      { transaction: t },
    );

    await t.commit();

    return updateCarteira;
  } catch (e) {
    await t.rollback();
    return { message: 'Algo deu errado' };
  }
};

module.exports = investSellService;
