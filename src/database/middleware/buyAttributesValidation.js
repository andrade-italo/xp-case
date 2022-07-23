const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const attributesValidation = (req, res, next) => {
  const attributes = req.body;

  const { error } = Joi.object({
    codAtivo: Joi.number().min(1).required(),
    qtdeAtivo: Joi.number().min(1).required(),
    codCliente: Joi.number().min(1).required(),
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
  attributesValidation,
};
