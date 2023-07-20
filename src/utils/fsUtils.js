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

const writeFile = async (data) => {
  const currentData = await readFile();
  const newData = [...currentData, data];
  try {
    fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(newData));
  } catch (err) {
    console.log(`Erro ao escrever no arquivo: ${err.message}`);
  }
};

module.exports = { readFile, writeFile };