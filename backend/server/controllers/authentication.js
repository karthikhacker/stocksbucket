const User = require('../models/user');
const config = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Signin user 
exports.signin = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: 'User not found' })
        }
        if (user) {
            const isMatch = bcrypt.compareSync(req.body.password, user.password); // true
            if (!isMatch) {
                return res.status(400).json({ error: 'oops password didnt match ' })
            } else {
                const token = jwt.sign({
                    userId: user._id,
                    email: user.email,
                    status: user.status
                }, config.JWT_SECRET);
                return res.status(200).json({ token: 'Bearer ' + token, user })
            }
        }
    })
}