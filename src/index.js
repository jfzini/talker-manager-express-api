const express = require('express');

// routers
const talkerRouter = require('./routes/talker.routes');
const loginRouter = require('./routes/login.routes');

// utils
const { OK } = require('./utils/statusHTTP');

// app config
const app = express();
app.use(express.json());

const PORT = process.env.PORT || '3001';

// DO NOT REMOVE THIS ENDPOINT AS IT IS NEEDED FOR THE AUTOMATED TESTS
app.get('/', (_request, response) => {
  response.status(OK).send();
});

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT || '3001'}`);
});
