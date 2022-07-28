const { Ativos } = require('../models');

const assetsService = async (codAtivo) => {
  const findAtivo = await Ativos.findOne({
    where: { cod_ativo: codAtivo },
    attributes: { exclude: ['siglaAtivo'] },
  });
  return findAtivo;
};

const addAtivo = async (payload) => {
  const createAtivo = await Ativos.create(payload);
  return createAtivo;
};

module.exports = { assetsService, addAtivo };
