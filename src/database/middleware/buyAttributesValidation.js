const Joi = require('joi');

const attributesValidation = (req, res, next) => {
  const attributes = req.body;

  const { error } = Joi.object({
    codAtivo: Joi.number().min(1).required(),
    qtdeAtivo: Joi.number().min(1).required(),
    codCliente: Joi.number().min(1).required(),
  }).validate(attributes);

  if (error) {
    if (error.message.match(/required/i)) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  return next();
};

module.exports = {
  attributesValidation,
};
