const express = require("express");
const categoryRoute = express.Router();
const { createCategory } = require('../controllers/categoryController');
const validateCategory = require('../middlewares/category-middleware');

const verifyToken = require("../middlewares/tokenValidate-middleware");

categoryRoute.post("/", verifyToken, validateCategory, createCategory);


module.exports = categoryRoute;
