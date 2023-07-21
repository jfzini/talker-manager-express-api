const { BAD_REQUEST } = require('../utils/statusHTTP');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!regex.test(email)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const minimumLength = 6;
  if (!password) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "password" é obrigatório' });
  }
  if (String(password).length < minimumLength) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return next();
};

module.exports = [validateEmail, validatePassword];
