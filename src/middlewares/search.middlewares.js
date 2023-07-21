const validateRateQuery = (req, res, next) => {
  const { rate } = req.query;
  if (!rate) return next();

  const numRate = Number(rate);
  if (!Number.isInteger(numRate) || numRate < 1 || numRate > 5) {
    return res
      .status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  return next();
};

const validateDateQuery = (req, res, next) => {
  const { date } = req.query;
  if (!date) return next();

  const dateRegex = /^["']?[0-3][0-9]\/[0-1][0-9]\/20[0-9]{2}["']?$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
  }
  return next();
};

module.exports = [ validateRateQuery, validateDateQuery ];