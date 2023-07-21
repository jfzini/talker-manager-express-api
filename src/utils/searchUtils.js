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

module.exports = { searchQueryParams };