const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next({status:401, message: 'Token not found'})
  }

  jwt.verify(authorization, process.env.JWT_SECRET, (err, decoded) => {

    if (err) {
      next({status:401, message: 'Expired or invalid token'})
    }
    next();
  });

};

module.exports = verifyToken;
