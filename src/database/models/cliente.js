// import { Model, DataTypes } from 'sequelize';
// import sequelize from './connectionSequelize';

// require('dotenv').config();

// export interface ClienteAttributes {
//   codCliente?: number,
//   lastName: string,
//   firstName: string,
//   cpf?: number,
//   saldo: number,
//   email: string,
//   senha: string,
// }

// class Cliente extends Model {
//   cpf?: number;

//   firstName!: string;

//   lastName!: string;

//   codCliente?: number;

//   saldo!: number;

//   email!: string;

//   senha!: string;
// }

// Cliente.init(
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    'Clientes',
    {
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      saldo: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      codCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER,
        unique: true,
        field: 'cod_cliente',
      },
      email: {
        type: DataTypes.STRING,
      },
      senha: {
        type: DataTypes.STRING,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },

    {
      timestamps: false,
    },
  );
  return Clientes;
};
