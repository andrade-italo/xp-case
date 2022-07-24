const jwt = require('jsonwebtoken');
const { comparaSenha, passwordHash } = require('../../util/crypto');
const { Clientes } = require('../models');

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
  const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);

  if (!isValidPass) {
    return { message: 'Senha invalida' };
  }

  return { token };
};

const registerService = async (payload) => {
  const {
    senha, cpf, email, firstName, lastName,
  } = payload;
  const [, created] = await Clientes.findOrCreate({
    where: { email: payload.email },
    defaults: {
      cpf, email, firstName, lastName, senha: passwordHash(senha),
    },
  });
  if (!created) return { message: 'Email ja cadastrado' };
  const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  loginService,
  registerService,
};
