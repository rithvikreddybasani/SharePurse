var jwt = require('jsonwebtoken')
var logger = require('./logger')

exports.generateAccessToken = (user) => {
    return jwt.sign(user, "NARENDRAMODI")
}


exports.validateToken = (req, res, next) => {
    
        //Checking if authorization is present in the header if not present then access is forbidden 
        if (req.headers["authorization"] == null) {
            logger.error(`URL : ${req.originalUrl} | API Authentication Fail | message: Token not present`)
            res.status(403).json({
                message: "Token not present"
            })
        } else {
            //getting token from request header 
            const authHeader = req.headers["authorization"]
            //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
            const token = authHeader.split(" ")[1]


            //function to verify the token 
            jwt.verify(token, "NARENDRAMODI", (err, user) => {
                if (err) {
                    logger.error(`URL : ${req.originalUrl} | API Authentication Fail | message: Invalid Token`)
                    res.sendStatus(403).json({
                        message: "Invalid Token"
                    })
                    res.end();
                } else {
                    //Adding user data to the req
                    req.user = user
                    //proceed to the next action in the calling function 
                    next()
                }
            })
            
        }
    }

//Validation function to check if the user is same as the token user 
exports.validateUser = (user, emailId) => {
    if (user != emailId){
        var err = new Error("Access Denied")
        err.status = 403
        throw err
    } else return true
}
