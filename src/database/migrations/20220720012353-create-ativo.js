module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      codAtivo: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        field: 'cod_ativo',

      },
      qtdeAtivo: {
        type: Sequelize.INTEGER,
        field: 'qtde_ativo',
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      siglaAtivo: {
        type: Sequelize.STRING,
        unique: true,
        field: 'sigla_ativo',
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Ativos');
  },
};
