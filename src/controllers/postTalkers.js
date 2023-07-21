const { CREATED } = require('../utils/statusHTTP');
const services = require('../services/postTalkers');

const postNewTalker = async (req, res) => {
  const newTalker = req.body;
  await services.postNewTalker(newTalker);
  res.status(CREATED).json(newTalker);
};

module.exports = { postNewTalker };