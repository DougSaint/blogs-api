const express = require('express');
const userRoute = require('./routes/user');
const { errorHandler } = require('./middlewares/error-middleware');

const app = express();

app.use(express.json());  // mova esta linha para cá

app.get('/', (_request, response) => {
  response.send();
});

app.use('/', userRoute);

app.use(errorHandler);

module.exports = app;
