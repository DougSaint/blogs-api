const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');

const checkCategoryIfExists = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category !== null;
};

const validateCategories = async (categoryIds) => {
  if (categoryIds && categoryIds.length > 0) {
    const categoryPromises = categoryIds.map((el) => checkCategoryIfExists(el));
    const resultCategories = await Promise.all(categoryPromises);
    if (resultCategories.some((cat) => !cat)) {
      return { message: 'one or more "categoryIds" not found' };
    }
  }
};

const createBlog = async (post) => {
  const { title, content, userId, categoryIds } = post;
  
  if (!title || !content) {
    return {
      message: 'Some required fields are missing',
    };
  }

  const categoryValidation = await validateCategories(categoryIds);
  if (categoryValidation) return categoryValidation;

  const data = await BlogPost.create({ title, content, userId });
  
  const insertPostCategory = categoryIds.map((categoryId) => ({ categoryId, postId: data.id }));

  await PostCategory.bulkCreate(insertPostCategory);

  return data.dataValues;
};

module.exports = { createBlog };
