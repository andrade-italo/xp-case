const jwt = require('jsonwebtoken');
const { comparaSenha, passwordHash } = require('../../util/crypto');
const { Clientes, sequelize } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '1h',
};

const loginService = async (email, password) => {
  const cliente = await Clientes.findOne({ where: { email } });
  if (!cliente) {
    return { message: 'Email não cadastrado' };
  }
  const isValidPass = comparaSenha(password, cliente.senha);
  const token = jwt.sign({ email, codCliente: cliente.codCliente }, JWT_SECRET, jwtConfig);

  if (!isValidPass) {
    return { message: 'Senha invalida' };
  }

  return { token, codCliente: cliente.codCliente };
};

const registerService = async (payload) => {
  const t = await sequelize.transaction();
  try {
    const {
      senha, cpf, email, firstName, lastName,
    } = payload;
    const [{ codCliente }, created] = await Clientes.findOrCreate(
      {
        where: { email },
        defaults: {
          cpf,
          email,
          firstName,
          lastName,
          senha: passwordHash(senha),
        },
        transaction: t,
      },
    );
    if (!created) return { message: 'Email ja cadastrado' };
    const token = jwt.sign({ email, codCliente }, JWT_SECRET, jwtConfig);

    await t.commit();

    return { token, codCliente };
  } catch (e) {
    await t.rollback();
    return { message: 'Algo deu errado' };
  }
};

module.exports = {
  loginService,
  registerService,
};
