module.exports = (sequelize, DataTypes) => {
  const Ativos = sequelize.define('Ativos', {
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qtde_ativo',
    },
    codAtivo: {
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    timestamps: false,
  });
  return Ativos;
};
