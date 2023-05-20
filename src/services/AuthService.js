const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { checkUserExists } = require('./userService');

const validateLogin = async (email) => {
  const user = await checkUserExists(email)
  return user;
};

const generateToken = async (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
}

module.exports = { validateLogin, generateToken };
