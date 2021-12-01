const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Pending'],
        default: 'Pending'
    },
    date: {
        type: Date,
        default: Date.now
    },
    passwordResetLink: {
        data: String,
        default: ''
    }
});


module.exports = mongoose.model('User', userSchema);