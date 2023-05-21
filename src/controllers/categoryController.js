const categoryService = require("../services/categoryService");


const createCategory = async (req, res) => {
  console.log(req.body);
  const result = await categoryService.createCategory(req.body);
  if(!result){
    return;
  }
  console.log(result);
  return res.status(201).json(result);
};

module.exports = { createCategory };
