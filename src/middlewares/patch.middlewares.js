const { BAD_REQUEST } = require('../utils/statusHTTP');

const validadePatchRate = (req, res, next) => {
  const { rate } = req.body;
  if (rate === undefined) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "rate" é obrigatório' });
  }
  const numRate = Number(rate);
  if (!Number.isInteger(numRate) || numRate < 1 || numRate > 5) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  return next();
};

module.exports = { validadePatchRate };
