const { Carteiras } = require('../models');

const clientService = async (codCliente) => {
  const getById = await Carteiras.findOne({ where: { codCliente } });
  return getById;
};
module.exports = clientService;
