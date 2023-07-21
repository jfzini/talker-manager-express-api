const connection = require('../configs/connection');

const getAllTalkers = async () => {
  const [rows] = await connection.execute('SELECT * FROM talkers;');
  return rows;
};

module.exports = { getAllTalkers };