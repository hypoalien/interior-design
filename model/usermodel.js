const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required:false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('user', userSchema);