const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const { Clientes } = require('../models');

const { JWT_SECRET } = process.env;

const authToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const cliente = await Clientes.findOne({ where: { email: payload.email } });
    if (!cliente) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    req.user = payload;

    return next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};
