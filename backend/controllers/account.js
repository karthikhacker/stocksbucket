const Account = require('../models/account');
//const axios = require('axios');

//create user 
exports.createUserAccount = async (req, res) => {
    const account = new Account({
        userId: req.user.id,
        id: req.body.id,
        account_number: req.body.account_number,
        status: req.body.status,
        currency: req.body.currency,
        last_equity: req.body.last_equity,
        created_at: req.body.created_at
    })
    account.save((err) => {
        if (err) {
            return res.status(400).json({ message: err })
        } else {
            res.status(200).json({ message: "Thank you,your application has been sent." })
        }
    })
}
// Get account details 
exports.getAccountDetail = (req, res) => {
    Account.findOne({ user: req.user.id })
        .populate('userId')
        .then(account => {
            res.status(200).json(account);
        })
}


