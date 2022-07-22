const attributesValidation = (req, res, next) => {
  const attributes = req.body;
  const required = ['codAtivo', 'codCliente', 'qtdeAtivo'];

  const checkRequired = [];
  required.forEach((att) => {
    if (!attributes[att]) checkRequired.push(att);
  });
  if (checkRequired.length) {
    return res.status(400).json({ message: `${checkRequired} is required` });
  }
  return next();
};

module.exports = {
  attributesValidation,
};
