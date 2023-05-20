function errorHandler(err, _req, res, _next) {
    const statusCode = err.status;
    const errorMessage = err.message;
  
    res.status(statusCode).json({
      message: errorMessage,
    });
  }
  
  module.exports = {
    errorHandler,
  };