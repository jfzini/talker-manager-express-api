// modules
const express = require('express');

// middlewares
const validateLogin = require('../middlewares/login.middlewares');

// controllers
const { postLogin } = require('../controllers/postLogin');

// =======================================================================================

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, postLogin);

module.exports = loginRouter;