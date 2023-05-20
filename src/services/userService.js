const { User } = require('../models');
const jwt = require('jsonwebtoken');

const validateLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};

module.exports = { validateLogin };
