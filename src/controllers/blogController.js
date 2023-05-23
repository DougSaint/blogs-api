const jwt = require('jsonwebtoken');
const blogService = require('../services/blogService');
const { getUserByEmail } = require('../services/userService');

const createBlog = async (req, res) => {
  const post = req.body;
  const userEmail = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  console.log(userEmail);
  const userId = await (getUserByEmail(userEmail.userId));
  const result = await blogService.createBlog({ userId, ...post });

  if (result.message) {
    return res.status(400).json({ message: result.message });
  }

  return res.status(201).json({ ...result, userId });
};

module.exports = { createBlog };
