const { generateToken } = require('../services/postLogin');
const { OK } = require('../utils/statusHTTP');

const postLogin = (req, res) => {
  const token = generateToken();
  res.status(OK).json({ token });
};

module.exports = { postLogin };