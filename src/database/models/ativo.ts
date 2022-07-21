import { Model, DataTypes } from 'sequelize';
import sequelize from './connectionSequelize';

require('dotenv').config();

export interface AtivoAttributes {
  codAtivo?: number,
  qtdeAtivo: number,
  valor: number,
  siglaAtivo: string,
}

class Ativo extends Model implements AtivoAttributes {
  codAtivo?: number;

  qtdeAtivo!: number;

  valor!: number;

  siglaAtivo!: string;
}
Ativo.init({
  valor: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  qtdeAtivo: {
    type: DataTypes.NUMBER,
    allowNull: false,
    field: 'qtde_ativo',
  },
  codAtivo: {
    primaryKey: true,
    type: DataTypes.NUMBER,
    unique: true,
    field: 'cod_ativo',
    autoIncrement: true,
    allowNull: false,
  },
  siglaAtivo: {
    type: DataTypes.STRING,
    unique: true,
    field: 'sigla_ativo',
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'ativos',
  timestamps: false,
});

export default Ativo;
