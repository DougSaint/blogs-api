const validateCategory = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        next({ status: 400, message: '"name" is required' });
    }

    next();
};

module.exports = validateCategory;