const { Carteiras, Ativos } = require('../models');

const investService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  const findCliente = await Clientes.findOne({ where: { cod_cliente: codCliente } });
  const totalCompra = (findAtivo.valor * qtdeAtivo).toFixed(2);
  if (!findAtivo) {
    return { message: 'Ativo não encontrado' };
  }
  if (findCliente.saldo < totalCompra) return { message: 'Saldo insuficiente!' };
  if (findAtivo.qtdeAtivo < qtdeAtivo) return { message: 'Quantidade indisponível' };
  const created = Carteiras.create({ codAtivo, codCliente, qtdeAtivo });
  return created;
};

module.exports = investService;
