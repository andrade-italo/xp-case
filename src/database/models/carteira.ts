import { Model, DataTypes } from 'sequelize';
import sequelize from './connectionSequelize';

require('dotenv').config();

export interface CarteiraAttributes {
  codCliente: number,
  codAtivo: number,
  qtdeAtivo: number,
}

class Carteira extends Model implements CarteiraAttributes {
  codCliente!: number;

  codAtivo!: number;

  qtdeAtivo!: number;

  static associate(models: any) {
    this.belongsTo(models.Cliente, {
      as: 'clientes',
      foreignKey: 'cod_cliente',
    });
    this.belongsTo(models.Ativo, {
      as: 'ativos',
      foreignKey: 'cod_ativo',
    });
  }
}
Carteira.init({
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
  sequelize,
  modelName: 'carteiras',
  timestamps: false,
});

export default Carteira;
