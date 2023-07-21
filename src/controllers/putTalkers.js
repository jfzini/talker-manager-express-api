const { OK, NOT_FOUND } = require('../utils/statusHTTP');
const services = require('../services/putTalkers');

const putTalker = async (req, res) => {
  const { id } = req.params;
  const talker = req.body;
  const updatedTalker = await services.putTalker(id, talker);
  if (!updatedTalker) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(OK).json(updatedTalker);
};

module.exports = { putTalker };