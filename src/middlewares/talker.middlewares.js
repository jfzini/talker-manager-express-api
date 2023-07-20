const validateTalkerName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return next();
};

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number.isNaN(age) || !Number.isInteger(age) || age < 18) {
    return res
      .status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  return next();
};

const validateTalkerTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talk.rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (parseInt(talk.rate) < 1 || parseInt(talk.rate) > 5) {
    return res
      .status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro entre 1 e 5' });
  }
  return next();
};

module.exports = { validateTalkerName, validateTalkerAge, validateTalkerTalk };