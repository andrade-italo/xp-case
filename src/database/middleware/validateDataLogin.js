const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const validateCreateLogin = (req, res, next) => {
  const attributes = req.body;

  const { error } = Joi.object({
    senha: Joi.string().min(6).required(),
    cpf: Joi.string().length(11).required(),
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).validate(attributes);

  if (error) {
    if (error.message.match(/required/i)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }
  return next();
};

const validateLogin = (req, res, next) => {
  const attributes = req.body;

  const { error } = Joi.object({
    senha: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
  }).validate(attributes);

  if (error) {
    if (error.message.match(/required/i)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }
  return next();
};

module.exports = {
  validateLogin,
  validateCreateLogin,
};
