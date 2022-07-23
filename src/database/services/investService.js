const { Carteiras, Ativos, Clientes } = require('../models');

const investService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const findCliente = await Clientes.findOne({ where: { cod_cliente: codCliente } });
  const totalCompra = (findAtivo.valor * qtdeAtivo).toFixed(2);
  if (!findAtivo) {
    return { message: 'Ativo não encontrado' };
  }
  if (findAtivo.qtdeAtivo < qtdeAtivo) return { message: 'Quantidade indisponível' };
  if (findCliente.saldo < totalCompra) return { message: 'Saldo insuficiente!' };

  const findCarteira = await Carteiras.findOne({ where: { cod_ativo: codAtivo } });

  if (!findCarteira) {
    const created = await Carteiras.create({ codAtivo, codCliente, qtdeAtivo });
    return created;
  }
  await Ativos.increment(
    { qtde_ativo: -qtdeAtivo },
    { where: { cod_ativo: codAtivo } },
  );

  const updateCarteira = await Carteiras.increment(
    { qtde_ativo: +qtdeAtivo },
    { where: { cod_ativo: codAtivo } },
  );
  return updateCarteira;
};

module.exports = investService;
