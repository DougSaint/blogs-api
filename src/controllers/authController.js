const authService = require("../services/AuthService");


const validateLogin = async (req, res) => {
  const userExists = await authService.validateLogin(req.body?.email);

  if(!userExists){
    return res.status(400).json({message: "Invalid fields"});
  }else{
    const token = await authService.generateToken(req.body.email);
    return res.status(200).json({token: token})
  }
};

module.exports = { validateLogin };
