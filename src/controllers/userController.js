const userService = require("../services/userService");
const authService = require("../services/AuthService");

const createUser = async (req, res) => {
  const token = await authService.generateToken(req.body.email);
  const result = await userService.createUser(req.body);
  if (!result) {
    return res.status(409).json({ message: "User already registered" });
  }
  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const result = await userService.getUsers();
  const formmatedResult = result?.map((el) => ({
    id: el.id,
    displayName: el.displayName,
    email: el.email,
    image: el.image,
  }));
  res.status(200).json(formmatedResult);
};

const getUser = async (req, res) => {
  const { id  } = req.params;
  const result = await userService.getUser(id);
  if(!result){
    return res.status(404).json({message: 'User does not exist'});
  }
  return res.status(200).json({ ...result?.dataValues, password: undefined });
};

module.exports = { createUser, getUsers, getUser };
