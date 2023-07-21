// modules
const express = require('express');

// middlewares
const { tokenValidation } = require('../middlewares/token.middlewares');
const { validadePatchRate } = require('../middlewares/patch.middlewares');
const validateTalker = require('../middlewares/talker.middlewares');
const validateSearch = require('../middlewares/search.middlewares');

// controllers
const {
  getAllTalkersDB,
  getAllTalkersJSON,
  searchTalkers,
  getTalkerById,
} = require('../controllers/getTalkers');
const { postNewTalker } = require('../controllers/postTalkers');
const { putTalker } = require('../controllers/putTalkers');
const { patchTalker } = require('../controllers/patchTalkers');
const { deleteTalker } = require('../controllers/deleteTalkers');

// =======================================================================================

const talkerRouter = express.Router();

talkerRouter.get('/', getAllTalkersJSON);

talkerRouter.get('/db', getAllTalkersDB);

talkerRouter.get('/search', tokenValidation, validateSearch, searchTalkers);

talkerRouter.get('/:id', getTalkerById);

// apply token validation to all routes below
talkerRouter.use(tokenValidation);

talkerRouter.post('/', validateTalker, postNewTalker);

talkerRouter.put('/:id', validateTalker, putTalker);

talkerRouter.patch('/rate/:id', validadePatchRate, patchTalker);

talkerRouter.delete('/:id', deleteTalker);

module.exports = talkerRouter;
