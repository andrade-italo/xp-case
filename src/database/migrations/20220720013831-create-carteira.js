module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carteiras', {
      codCliente: {
        type: Sequelize.INTEGER,
        foreingKey: true,
        field: 'cod_cliente',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Clientes',
          key: 'cod_cliente',
        },
      },
      qtdeAtivo: {
        type: Sequelize.INTEGER,
        field: 'qtde_ativo',
        allowNull: false,
      },
      codAtivo: {
        type: Sequelize.INTEGER,
        foreingKey: true,
        field: 'cod_ativo',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Ativos',
          key: 'cod_ativo',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Carteiras');
  },
};
