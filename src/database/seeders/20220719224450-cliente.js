module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Clientes',
    [
      {
        first_name: 'Italo',
        last_name: 'Alves',
        cpf: '125435',
        cod_cliente: 1,
        saldo: 9999.99,
        email: 'italo@gmail.com',
        admin: true,
        senha: '$2b$10$77F6NAWDpS52FJT8894oe.W4RDtOJOFnxsXe1UPrqFtkVO6m/2Z2a',
      },
      {
        first_name: 'Victoria',
        last_name: 'Helena',
        cpf: '125435',
        cod_cliente: 2,
        saldo: 9999.99,
        email: 'victoria@gmail.com',
        admin: false,
        senha: '$2b$10$fFsHro1EhUqBY9U539qqhu/9glrhWJCYmvjQ7z2JtyI/oB9z6LoJK',
      },
      {
        first_name: 'Vinicius',
        last_name: 'Viana',
        cpf: '125435',
        cod_cliente: 3,
        saldo: 9999.99,
        email: 'vinicius@gmail.com',
        admin: false,
        senha: '$2b$10$.aWLq3/caWiEjy4y4zP8e.BHYqI3dLIfe27/Z5qsoXpmdAZsIJsBa',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};
