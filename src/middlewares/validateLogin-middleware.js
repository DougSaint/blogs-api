const validateLogin = async (req, _res, next) => {
  if (!req.body || !req.body.email || !req.body.password) {
    next({ status: 400, message: 'Some required fields are missing' });
  } else {
    next();
  }
};

module.exports = validateLogin;
