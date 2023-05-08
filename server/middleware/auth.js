const jwt = require("jsonwebtoken");
const Register = require("../models/User.js");

const auth = async(req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, JWT_SECRET);
        console.log(verifyUser);

        const user = Register.findOne({_id: verifyUser._id})
        console.log(user);
        next();
    } catch (error) {
        res.status(401).send(error);
    }
}
module.exports = auth;