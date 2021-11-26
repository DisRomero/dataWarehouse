const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.LANG;

// autorizacion
const validateToken = (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    if (!jwtToken) {
        return res.status(401).json({ msg: "User o password no valid" })
    }
    const jwtClient = jwtToken.split(" ")[1];
    // autorizacion token
    jwt.verify(jwtClient, SECRET, (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "Invalid token"})
        }
        if(decoded.ID_user_type!==1){
            return res.status(401).json({msg: "The user is not an admin"})
        }
        next();
    })
};

module.exports = {
    validateToken
};