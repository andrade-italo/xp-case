import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE || 'xp_case_db', process.env.DB_USERNAME || 'trybe', process.env.PASSWORD_POSTGRES, {
  dialect: 'postgres',
  host: process.env.HOST,
  dialectOptions: {
  },
});

export default sequelize;
