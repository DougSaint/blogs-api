const checkDisplayName = (displayName, next) => {
  if (displayName && displayName.length < 8) {
    next({
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    });
    return true;
  }
  return false;
};

const checkEmail = (email, next) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (email && !emailRegex.test(email)) {
    next({ status: 400, message: '"email" must be a valid email' });
    return true;
  }
  return false;
};

const checkPassword = (password, next) => {
  if (password && password.length < 6) {
    next({
      status: 400,
      message: '"password" length must be at least 6 characters long',
    });
    return true;
  }
  return false;
};

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (
    !checkDisplayName(displayName, next)
    && !checkEmail(email, next)
    && !checkPassword(password, next)
  ) {
    next();
  }
};

module.exports = { validateUser };
