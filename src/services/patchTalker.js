const { readFile, putFile } = require('../models/fsModels');
const { findTalkerById } = require('./getTalkers');

const patchTalkerRate = async (id, rate) => {
  try {
    const data = await readFile();
    const talker = await findTalkerById(data, id);
    talker.talk.rate = rate;
    const updatedTalker = await putFile(id, talker);
    return updatedTalker;
  } catch (err) {
    console.log(`Erro ao fazer patch de rate no arquivo: ${err.message}`);
  }
};

module.exports = { patchTalkerRate };