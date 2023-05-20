const userService = require("../services/userService");
const authService = require("../services/AuthService");

const checkUserExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return true;
  }
  return false;
};

const createUser = async (req, res) => {
  const token = await authService.generateToken(req.body.email);
  const result = await userService.createUser(req.body);
  if(!result){
    return res.status(409).json({message: 'User already registered'});
  }
  return res.status(201).json({ token });
};

module.exports = { createUser, checkUserExists };
