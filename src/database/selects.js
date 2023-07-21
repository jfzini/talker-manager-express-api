const connection = require('./connection');

const selectAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM talkers;');
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

module.exports = { selectAll };