const express = require('express');

const userRoute = express.Router();
const {
  createUser,
  getUsers,
  getUser,
} = require('../controllers/userController');
const { validateUser } = require('../middlewares/validateUser-middleware');
const verifyToken = require('../middlewares/tokenValidate-middleware');

userRoute.post('/', validateUser, createUser);
userRoute.get('/', verifyToken, getUsers);
userRoute.get('/:id', verifyToken, getUser);

module.exports = userRoute;
