const mongoose = require('mongoose');
const validator = require('validator');
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true ,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter strong password")
            }
        }
    },
    role:{
        type:String,
        required:true,
        trim:true
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;