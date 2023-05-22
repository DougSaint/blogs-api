const { Category } = require('../models');

const createCategory = async (user) => {
  const newUser = await Category.create(user);
  return newUser.dataValues;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getCategories };
