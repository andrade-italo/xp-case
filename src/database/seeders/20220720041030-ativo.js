module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Ativos',
    [
      {
        qtde_ativo: 1000,
        valor: 74.21,
        cod_ativo: 1,
        sigla_ativo: 'PETR4',
      },
      {
        qtde_ativo: 1000,
        valor: 23.85,
        cod_ativo: 2,
        sigla_ativo: 'VALE3',
      },
      {
        qtde_ativo: 1000,
        valor: 98.87,
        cod_ativo: 3,
        sigla_ativo: 'XPBR31',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Ativos', null, {}),
};
