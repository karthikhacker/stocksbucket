const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required'
    }

})
module.exports = mongoose.model('User', userSchema);
