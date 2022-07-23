// import { Model, DataTypes } from 'sequelize';
// import sequelize from './connectionSequelize';

// import { sequelize } from ".";

// require('dotenv').config();

// export interface CarteiraAttributes {
//   codCliente: number,
//   codAtivo: number,
//   QtdeAtivo: number,
// }

// class Carteira extends Model implements CarteiraAttributes {
//   codCliente!: number;

//   codAtivo!: number;

//   QtdeAtivo!: number;

// static associate(models: any) {
//   this.belongsTo(models.Cliente, {
//     as: 'clientes',
//     foreignKey: 'cod_cliente',
//   });
//   this.belongsTo(models.Ativo, {
//     as: 'ativos',
//     foreignKey: 'cod_ativo',
//   });
// }
// }
// Carteira.init
module.exports = (sequelize, DataTypes) => {
  const Carteiras = sequelize.define('Carteiras', {
    codCliente: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'cod_cliente',
      allowNull: true,
    },
    codAtivo: {
      type: DataTypes.INTEGER,
      field: 'cod_ativo',
      allowNull: true,
    },
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      field: 'qtde_ativo',
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  Carteiras.associate = (models) => {
    Carteiras.belongsTo(models.Clientes, {
      foreignKey: 'codCliente', as: 'clientes',
    });
    Carteiras.belongsTo(models.Ativos, {
      foreignKey: 'codAtivo', as: 'Ativos',

    });
  };
  return Carteiras;
};
