const userService = require("../services/userService");
const jwt = require('jsonwebtoken');

const validateLogin = async (req, res) => {
  const userExists = await userService.validateLogin(req.body?.email);

  if(!userExists){
    return res.status(400).json({message: "Invalid fields"});
  }else{
    const token = jwt.sign({ userId: userExists.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({token: token})
  }
};

module.exports = { validateLogin };
