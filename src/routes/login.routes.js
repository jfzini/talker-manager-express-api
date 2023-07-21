// modules
const express = require('express');

// middlewares
const validateLogin = require('../middlewares/login.middlewares');

// utils
const { generateToken } = require('../utils/tokenUtils');
const { OK } = require('../utils/statusHTTP');

// login routes
const loginRouter = express.Router();

loginRouter.post('/', validateLogin, (req, res) => {
  const token = generateToken();
  res.status(OK).json({ token });
});

module.exports = loginRouter;