const mongoose = require('mongoose');
const createUser = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    Phone:{
        type:String,
        required: true,
    },
    Gender:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('UserData',createUser);