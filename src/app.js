const express = require('express');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const authController = require('./controllers/authController');
const { errorHandler } = require('./middlewares/error-middleware');
const validateLogin = require('./middlewares/validateLogin-middleware');

const app = express();

app.use(express.json()); // mova esta linha para cá

app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validateLogin, authController.validateLogin);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);

app.use(errorHandler);

module.exports = app;
