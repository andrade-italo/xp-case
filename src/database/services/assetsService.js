const { Ativos } = require('../models');

const assetsService = async (codAtivo) => {
  const findAtivo = await Ativos.findOne({
    where: { cod_ativo: codAtivo },
    attributes: { exclude: ['siglaAtivo'] },
  });
  return findAtivo;
};
module.exports = assetsService;
