const express = require('express');
const { readFile, writeFile } = require('../utils/fsUtils');
const { tokenValidation } = require('../middlewares/token.middlewares');
const {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
} = require('../middlewares/talker.middlewares');

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

talkerRouter.post(
  '/',
  tokenValidation,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  async (req, res) => {
    const newTalker = req.body;
    const currentData = await readFile();
    newTalker.id = currentData[currentData.length - 1].id + 1;

    const newData = await writeFile(newTalker);
    res.status(201).json(newTalker);
  },
);

module.exports = talkerRouter;
