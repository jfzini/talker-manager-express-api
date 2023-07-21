const { putFile } = require('../models/fsModels');

const putTalker = async (id, talker) => putFile(id, talker);

module.exports = { putTalker };