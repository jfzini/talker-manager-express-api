const express = require('express');
const { readFile, writeFile, updateFile } = require('../utils/fsUtils');

// middlewares
const { tokenValidation } = require('../middlewares/token.middlewares');
const talkerMiddlewares = require('../middlewares/talker.middlewares');

const validateTalker = Object.values(talkerMiddlewares);

const talkerRouter = express.Router();

talkerRouter.get('/', async (req, res) => {
  const data = await readFile();
  res.status(200).json(data);
});

talkerRouter.get('/:id', async (req, res) => {
  const data = await readFile();
  const { id } = req.params;
  const talker = data.find((person) => person.id === Number(id));
  if (talker) return res.status(200).json(talker);

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

talkerRouter.use(tokenValidation);

talkerRouter.post('/', validateTalker, async (req, res) => {
  const newTalker = req.body;
  const currentData = await readFile();
  newTalker.id = currentData[currentData.length - 1].id + 1;

  await writeFile(newTalker);
  res.status(201).json(newTalker);
});

talkerRouter.put('/:id', validateTalker, async (req, res) => {
  const { id } = req.params;
  const newTalker = req.body;
  const updatedTalker = await updateFile(id, newTalker);
  if (!updatedTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(updatedTalker);
});

module.exports = talkerRouter;
