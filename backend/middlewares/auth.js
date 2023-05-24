const jwt = require("jsonwebtoken");
const { BadRequestError, UnAuthorizedError } = require("../errors/custom-errors");

const authorizationMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization ;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new BadRequestError("No token provided")
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {userID,userName} = decoded ;
        req.user = {userID, userName} ;
        next();
    } catch (error) {
        throw new UnAuthorizedError("Not authorized to access this route")
    }
}

module.exports = authorizationMiddleware ;