const models = require('../models/fsModels');

const deleteTalker = async (id) => models.deleteTalker(id);

module.exports = { deleteTalker };