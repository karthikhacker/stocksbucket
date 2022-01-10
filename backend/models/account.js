const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    id: {
        type: String
    },
    account_number: {
        type: String
    },
    status: {
        type: String
    },
    currency: {
        type: String
    },
    last_equity: {
        type: String
    },
    created_at: {
        type: String
    }
})
module.exports = mongoose.model('Account', accountSchema);