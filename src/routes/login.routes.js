const express = require('express');
const { generateToken } = require('../utils/tokenUtils');
const { validateEmail, validatePassword } = require('../middlewares/login.middlewares');

const loginRouter = express.Router();

loginRouter.post('/', validateEmail, validatePassword, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = loginRouter;