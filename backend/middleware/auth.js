const jwt = require('jsonwebtoken');
const config = require('../config/config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Unauthroized' })
    }
    try {
        //verify token 
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Token in valid' })
    }
}
module.exports = auth;