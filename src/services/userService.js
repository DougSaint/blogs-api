const { User } = require("../models");

const checkUserExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return true;
  }
  return false;
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
}

module.exports = { createUser, checkUserExists, getUsers };
