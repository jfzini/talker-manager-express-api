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
    await fs.writeFile(
      path.resolve(__dirname, '..', 'talker.json'),
      JSON.stringify(newData, null, 2),
    );
  } catch (err) {
    console.log(`Erro ao escrever no arquivo: ${err.message}`);
  }
};

const putFile = async (id, updateData) => {
  const data = await readFile();
  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));
  if (talkerIndex === -1) return false;

  data[talkerIndex] = { ...data[talkerIndex], ...updateData };

  try {
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(data, null, 2));
    return data[talkerIndex];
  } catch (err) {
    console.log(`Erro ao escrever no arquivo: ${err.message}`);
  }
};

const deleteTalker = async (id) => {
  const data = await readFile();
  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));
  if (talkerIndex === -1) return false;

  data.splice(talkerIndex, 1);

  try {
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(`Erro ao deletar talker no arquivo: ${err.message}`);
  }
};

module.exports = { readFile, writeFile, putFile, deleteTalker };