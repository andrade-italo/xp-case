module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Clientes',
    [
      {
        first_name: 'Italo',
        last_name: 'Alves',
        cpf: 125435,
        cod_cliente: 1,
        saldo: 9999.99,
        email: 'italo@gmail.com',
        senha: '$2b$10$4R0z8GSYfKckcaa0nNKgguZCwlAFbU3SJjYxBLHOT38/YKNJbFfgm',
      },
      {
        first_name: 'Victoria',
        last_name: 'Helena',
        cpf: 125435,
        cod_cliente: 2,
        saldo: 9999.99,
        email: 'victoria@gmail.com',
        senha: '$2b$10$OQW7UNwGhe/EVbhf0nTiOuK.cumtmMEWS7WAnXm/fJpYB/b81x3fK',
      },
      {
        first_name: 'Vinicius',
        last_name: 'Viana',
        cpf: 125435,
        cod_cliente: 3,
        saldo: 9999.99,
        email: 'vinicius@gmail.com',
        senha: '$2b$10$7d6BIWzR4.z0/V2gkY2dT.nxYjvhZ51.eRX643kFyS.obKsBSG0/m',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};
