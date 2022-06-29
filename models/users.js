const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
})

const User = mongoose.model('user', userSchema)   //1st arg singular of collection name users - user

module.exports = User
