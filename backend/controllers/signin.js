const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

//user login 
exports.signin = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: 'User not found, please signup up' })
        }
        if (user) {
            if (req.body.password !== user.password) {
                console.log(user.password, req.body.password)
                return res.status(400).json({ error: 'oops password didnt match ' })
            } else {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                }, config.JWT_SECRET, { expiresIn: '1h' });
                res.cookie('token', token, { expiresIn: '1h' })
                return res.status(200).json({ token: token, user })
            }
        }
    })
}

//user info 
exports.userInfo = (req, res) => {
    res.json(req.user)
}
