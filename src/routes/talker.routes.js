// modules
const express = require('express');

// middlewares
const { tokenValidation } = require('../middlewares/token.middlewares');
const { validadePatchRate } = require('../middlewares/patch.middlewares');
const validateTalker = require('../middlewares/talker.middlewares');
const validateSearch = require('../middlewares/search.middlewares');

// utils
const { readFile, writeFile, putFile, deleteTalker, patchTalkerRate } = require('../utils/fsUtils');
const { OK, NOT_FOUND, CREATED, NO_CONTENT } = require('../utils/statusHTTP');
const {
  getAllTalkersDB,
  getAllTalkersJSON,
  searchTalkers,
  getTalkerById,
} = require('../controllers/getTalkers');

// talker routes
const talkerRouter = express.Router();

talkerRouter.get('/', getAllTalkersJSON);

talkerRouter.get('/db', getAllTalkersDB);

talkerRouter.get('/search', tokenValidation, validateSearch, searchTalkers);

talkerRouter.get('/:id', getTalkerById);

// apply token validation to all routes below
talkerRouter.use(tokenValidation);

talkerRouter.post('/', validateTalker, async (req, res) => {
  const newTalker = req.body;
  const currentData = await readFile();
  newTalker.id = currentData[currentData.length - 1].id + 1;

  await writeFile(newTalker);
  res.status(CREATED).json(newTalker);
});

talkerRouter.put('/:id', validateTalker, async (req, res) => {
  const { id } = req.params;
  const newTalker = req.body;
  const updatedTalker = await putFile(id, newTalker);
  if (!updatedTalker) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(OK).json(updatedTalker);
});

talkerRouter.patch('/rate/:id', validadePatchRate, async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;

  const updatedTalker = await patchTalkerRate(id, rate);
  if (!updatedTalker) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(NO_CONTENT).end();
});

talkerRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deleteTalker(id);
  res.status(NO_CONTENT).end();
});

module.exports = talkerRouter;
