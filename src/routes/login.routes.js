const express = require('express');
const { generateToken } = require('../utils/tokenUtils');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body;
  const token = generateToken();
  // if (!email || !password) {
  //   return res.status(401).json({ message: 'Todos os campos são obrigatórios' })
  // }
  res.status(200).json({ token });
});

module.exports = loginRouter;