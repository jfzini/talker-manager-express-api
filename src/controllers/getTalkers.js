const service = require('../services/getTalkers');
const { OK, NOT_FOUND } = require('../utils/statusHTTP');

const getAllTalkersDB = async (req, res) => {
  const data = await service.getAllTalkersDB();
  res.status(OK).json(data);
};

const getAllTalkersJSON = async (req, res) => {
  const data = await service.getAllTalkersJSON();
  res.status(OK).json(data);
};

const getTalkerById = async (req, res) => {
  const data = await service.getAllTalkersJSON();
  const { id } = req.params;
  const talker = await service.findTalkerById(data, id);
  if (talker) return res.status(OK).json(talker);

  return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
};

const searchTalkers = async (req, res) => {
  const data = await service.getAllTalkersJSON();
  const foundTalkers = service.searchQueryParams(req.query, data);
  return res.status(OK).json(foundTalkers);
};

module.exports = { getAllTalkersDB, getAllTalkersJSON, searchTalkers, getTalkerById };