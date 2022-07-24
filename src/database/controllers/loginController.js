const { StatusCodes } = require('http-status-codes');

const { loginService, registerService } = require('../services/loginService');

const loginController = async (req, res) => {
  const { email, senha } = req.body;
  const loginResponse = await loginService(email, senha);
  if (loginResponse.message) return res.status(StatusCodes.BAD_REQUEST).json(loginResponse);
  return res.status(StatusCodes.OK).json(loginResponse);
};

const registerController = async (req, res) => {
  const payload = req.body;
  const register = await registerService(payload);
  if (register.message) return res.status(StatusCodes.BAD_REQUEST).json(register);
  return res.status(StatusCodes.OK).json(register);
};

module.exports = {
  loginController, registerController,
};
