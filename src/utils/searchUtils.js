const filterQuery = (data, query) => {
  const foundTalkers = data.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
  return foundTalkers;
};

const filterRate = (data, rate) => {
  const foundTalkers = data.filter((talker) => talker.talk.rate === Number(rate));
  return foundTalkers;
};

const searchQueryParams = (params, data) => {
  const { q, rate } = params;
  if (q && rate) return filterQuery(filterRate(data, rate), q);
  if (q) return filterQuery(data, q);
  if (rate) return filterRate(data, rate);
};

module.exports = { searchQueryParams };