// modules
const express = require('express');

// middlewares
const validateLogin = require('../middlewares/login.middlewares');

// utils
const { generateToken } = require('../utils/tokenUtils');

// login routes
const loginRouter = express.Router();

loginRouter.post('/', validateLogin, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = loginRouter;