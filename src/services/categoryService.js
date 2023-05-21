const { Category } = require("../models");

const createCategory = async (user) => {
  const newUser = await Category.create(user);
  return newUser?.dataValues;
};

module.exports = { createCategory };
