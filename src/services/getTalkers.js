const { readFile } = require('../model/fsModels');
const model = require('../model/selects');

const getAllTalkersDB = async () => {
  const rows = await model.getAllTalkers();
  const parsedRows = rows.map(({ id, name, age, talk_rate: rate, talk_watched_at: watchedAt }) => ({
    id,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  }));
  return parsedRows;
};

const getAllTalkersJSON = async () => readFile();

const searchQueryParams = (query, data) => {
  let foundTalkers = data;
  if (query.q) {
    foundTalkers = foundTalkers
      .filter(({ name }) => name.toLowerCase().includes(query.q.toLowerCase()));
  }
  if (query.rate) {
    foundTalkers = foundTalkers.filter(({ talk }) => talk.rate === Number(query.rate));
  }
  if (query.date) {
    foundTalkers = foundTalkers.filter(({ talk }) => talk.watchedAt === query.date);
  }
  return foundTalkers;
};

const findTalkerById = async (data, id) => data.find((person) => person.id === Number(id));

module.exports = { getAllTalkersDB, getAllTalkersJSON, searchQueryParams, findTalkerById };