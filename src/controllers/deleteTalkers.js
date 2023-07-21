const { NO_CONTENT } = require('../utils/statusHTTP');
const services = require('../services/deleteTalkers');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  await services.deleteTalker(id);
  res.status(NO_CONTENT).end();
};

module.exports = { deleteTalker };