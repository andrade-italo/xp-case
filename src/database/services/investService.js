const { Carteiras } = require('../models');

const investService = async (payload) => {
  const { codAtivo, qtdeAtivo, codCliente } = payload;
  const created = Carteiras.create({ codAtivo, codCliente, qtdeAtivo });
  return created;
};

module.exports = investService;
