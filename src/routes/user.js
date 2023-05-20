const express = require('express');
const userController = require('../controllers/userController');
const {validateLogin} = require('../middlewares/validateLogin-middleware')
const userRoute = express.Router();


userRoute.post('/login', validateLogin,userController.validateLogin);


module.exports = userRoute;