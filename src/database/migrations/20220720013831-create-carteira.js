module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carteiras', {
      codCliente: {
        type: Sequelize.INTEGER,
        foreingKey: true,
        field: 'cod_cliente',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'clientes',
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
          model: 'ativos',
          key: 'cod_ativo',
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('carteiras');
  },
};
