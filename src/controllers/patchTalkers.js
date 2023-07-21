const { patchTalkerRate } = require('../services/patchTalker');
const { NOT_FOUND, NO_CONTENT } = require('../utils/statusHTTP');

const patchTalker = async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  const updatedTalker = await patchTalkerRate(id, rate);
  if (!updatedTalker) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(NO_CONTENT).end();
};

module.exports = { patchTalker };