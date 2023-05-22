const express = require('express');

const categoryRoute = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');
const validateCategory = require('../middlewares/category-middleware');

const verifyToken = require('../middlewares/tokenValidate-middleware');

categoryRoute.post('/', verifyToken, validateCategory, createCategory);
categoryRoute.get('/', verifyToken, getCategories);

module.exports = categoryRoute;
