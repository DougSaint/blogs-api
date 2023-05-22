const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const result = await categoryService.createCategory(req.body);
  if (!result) {
    return;
  }
  return res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await categoryService.getCategories();
  return res.status(200).json(result);
};

module.exports = { createCategory, getCategories };
