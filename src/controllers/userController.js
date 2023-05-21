const userService = require("../services/userService");
const authService = require("../services/AuthService");



const createUser = async (req, res) => {
  const token = await authService.generateToken(req.body.email);
  const result = await userService.createUser(req.body);
  if(!result){
    return res.status(409).json({message: 'User already registered'});
  }
  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const result = await userService.getUsers()
  const formmatedResult = result?.map((el) => ({
    id: el.id,
    displayName: el.displayName,
    email: el.email,
    image: el.image,
  }));
  res.status(200).json(formmatedResult);
}

module.exports = { createUser
  , getUsers };
