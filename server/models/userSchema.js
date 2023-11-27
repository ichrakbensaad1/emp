const mongoose = require ("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('no valid email')
            }
        }
    },
    datecreated:Date,
    dateUpadated:Date

}, {collection:'users'})

//model 
const users = mongoose.model("users",userSchema);


module.exports= users ;