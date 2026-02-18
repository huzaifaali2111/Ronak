const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auth_schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('auth', auth_schema)