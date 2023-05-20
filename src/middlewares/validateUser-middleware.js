const validateUser = (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;

    if(displayName?.length < 8){
        next({ status: 400, message: "\"displayName\" length must be at least 8 characters long" });
    }
    if(!emailRegex.test(email)){
        next({ status: 400, message: "\"email\" must be a valid email" });
    }
    if(password?.length < 6){
        next({ status: 400, message: "\"password\" length must be at least 6 characters long" });
    }
    next();
}

module.exports = { validateUser };