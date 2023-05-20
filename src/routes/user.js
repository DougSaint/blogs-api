const express = require('express');
const userRoute = express.Router();
const { createUser } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validateUser-middleware');

userRoute.post('/', validateUser ,createUser);


module.exports = userRoute;