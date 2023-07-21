const { readFile, writeFile } = require('../models/fsModels');

const postNewTalker = async (talker) => {
  const currentData = await readFile();
  const newTalker = talker;
  newTalker.id = currentData[currentData.length - 1].id + 1;

  await writeFile(talker);
};

module.exports = { postNewTalker };