const User = require('../models/user');
const config = require('../config/db');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.SENDGRID_API_KEY);
require('dotenv').config()

const jwt = require('jsonwebtoken');
const sendMailFactory = require('sendmail');

//signup
exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) {
                return res.status(400).json({ message: 'User already exists' })
            }
            if (!user) {
                const { email, password, status } = req.body;
                //hash password
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                const user = new User({ email, password: hash });
                //token
                const token = jwt.sign({ email, password, status }, config.JWT_ACCOUNT_ACTIVATION, { expiresIn: '10m' })
                // send activation email
                const emailData = {
                    from: config.EMAIL_FROM,
                    to: email,
                    subject: 'Account activation link',
                    text: 'Hi',
                    html: `
                    <div class="container">
                    <p>Please use following link to activate your account</p>
                    <p>${config.CLIENT_URL}/auth/activate/${token}</p>
                    <hr />
                    <p>Thank you</p>
                    </div>
           `
                }
                sgMail.send(emailData).then((sent) => {
                    console.log(sent)
                    return res.status(200).json({ message: `Verification email sent to ${email} ` })
                })
                    .catch(error => {
                        return res.status(400).json(error)
                    })
            }
        })
}
//Account activation
exports.accountActivation = (req, res) => {
    const { token } = req.body;
    if (token) {
        jwt.verify(token, config.JWT_ACCOUNT_ACTIVATION, function (err, decoded) {
            if (err) {
                return res.status(401).json({ message: 'Activation link expired. Signup again' })
            }


            const { name, email, password } = jwt.decode(token);
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const user = new User({
                name,
                email,
                password: hash
            })
            user.save((err, user) => {
                if (err) {
                    return res.status(400).json({ message: err })
                }
                res.status(200).json(user)
            })
        })
    } else {
        return res.status(401).json({ message: 'Something went wrong.try again.' })
    }
}
