const express = require('express');
const { readFile } = require('../utils/fsUtils');
const talkerRouter = express.Router();

talkerRouter.get('/', async (req, res) => {
  const data = await readFile();
  res.status(200).json(data);
});

module.exports = talkerRouter;