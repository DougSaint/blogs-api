const { User } = require('../models');

const checkUserExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};

const createUser = async (user) => {
  const userExists = await checkUserExists(user.email);
  if (!userExists) {
    const newUser = await User.create(user);
    return newUser;
  }
  return false;
};

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUser = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user.dataValues.id;
};
module.exports = { createUser, checkUserExists, getUsers, getUser, getUserByEmail };
