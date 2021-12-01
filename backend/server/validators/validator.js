const { check, validationResult } = require('express-validator');

exports.validateUser = [
    check("email")
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage("Not an valid email"),
    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required.')
        .isLength({ min: 8 })
        .withMessage('Password must be 8 character long.')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .withMessage('Password should contain one upper case letter,one number, and a special character.')

];

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if (!error.length) return next()
    res.status(400).json({ error: error[0].msg })
}