const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

const auth = async(req, res,next)=>{
    try {
        const authHeader = req.header('authorization');
        const token = authHeader.split(' ')[1]; //BEARER token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
        if(!user) throw new Error('Unauthorized!');
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(500).send({
            apiStatus: false,
            data: error,
            message: 'unauthorized!'
        })
    }
}

module.exports = auth;