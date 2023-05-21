const User = require("../models/user");
const {BadRequestError, UnAuthorizedError} = require("../errors/custom-errors");

const userRegister = async (req,res,next) => {
    const user = await User.create({...req.body});
     res.status(200).json({
       message: `Welcome ${user.name}` 
     })
}

const userLogin = async (req,res,next) => {
    const {email, password} = req.body ;
    
    if(!email || !password){
        throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({email});

    if(!user){
        throw new UnAuthorizedError("Invalid credentials");
    }

    const isCorrectPassword = await user.comparePassword(password);

    if(!isCorrectPassword){
        throw new UnAuthorizedError("Invalid credentials")
    }
    res.status(200).json({
        message: `Welcome back ${user.name}`
      })
}

module.exports = {
    userRegister,
    userLogin
}