const { Carteiras, Ativos } = require('../models');

const investService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const findAtivo = await Ativos.findOne({ where: { cod_ativo: codAtivo } });
  if (!findAtivo) {
    return { message: 'Ativo não encontrado' };
  }
  if (findAtivo.qtdeAtivo < qtdeAtivo) return { message: 'Quantidade indisponível' };
  const created = Carteiras.create({ codAtivo, codCliente, qtdeAtivo });
  return created;
};

module.exports = investService;
