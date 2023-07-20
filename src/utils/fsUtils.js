const fs = require('fs/promises');
const path = require('path');


const readFile = async () => {
  try {
    const rawData = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf-8');
    return JSON.parse(rawData);
  } catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`);
  }
};

module.exports = {readFile};