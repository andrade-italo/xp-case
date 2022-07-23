const { sequelize } = require('../models');

const clientService = async (codCliente) => {
  const [raw] = await sequelize.query(`SELECT "Carteiras"."cod_cliente" AS "codCliente", "Carteiras"."cod_ativo" AS
     "codAtivo", "Carteiras"."qtde_ativo" AS "qtdeAtivo", "Ativos"."valor" AS "valor" FROM
      "Carteiras" INNER JOIN "Ativos" ON "Carteiras"."cod_ativo" = "Ativos"."cod_ativo" WHERE 
      "Carteiras"."cod_cliente" = ?`, { replacements: [codCliente] });
  return raw;
};
module.exports = clientService;
