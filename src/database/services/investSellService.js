const { Carteiras, Ativos, Clientes } = require('../models');

const investSellService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const findCliente = await Clientes.findOne({ where: { cod_cliente: codCliente } });
  const totalCompra = (findAtivo.valor * qtdeAtivo).toFixed(2);

  if (findCliente.saldo < totalCompra) return { message: 'Saldo insuficiente!' };
  if (findAtivo.qtdeAtivo < qtdeAtivo) return { message: 'Quantidade indisponível' };

  const findCarteira = await Carteiras.findOne(
    { where: { cod_ativo: codAtivo, cod_cliente: codCliente } },
  );

  if (!findCarteira) {
    return { message: 'Não existe o ativo na sua carteira' };
  }

  if (findCarteira.qtdeAtivo < qtdeAtivo) {
    return { message: 'A quantidade do ativo é insuficiente' };
  }

  await Ativos.increment(
    { qtde_ativo: +qtdeAtivo },
    { where: { cod_ativo: codAtivo } },
  );

  const updateCarteira = await Carteiras.increment(
    { qtde_ativo: -qtdeAtivo },
    { where: { cod_ativo: codAtivo, cod_cliente: codCliente } },
  );
  return updateCarteira;
};

module.exports = investSellService;
