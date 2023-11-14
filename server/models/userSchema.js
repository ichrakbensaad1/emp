const mongoose = require ("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trime: true
    },
    lname:{
        type: String,
        required:true,
        trime: true
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
    contact:{
        type: String,
        required:true,
        unique: true,
        minlengnth:10,
        maxlength:10
    },
    location:{
        type: String,
        required:true,
        trime: true
    },
    emploi:{
        type: String,
        required:true,
       
    },
    gender:{
        type: String,
        required:true,
       
    },
    profile:{
        type: String,
        required:true,
       
    },
    location:{
        type: String,
        required:true,
       
    },
    datecreated:Date,
    dateUpadated:Date

})

//model 
const users =new mongoose.model("users",userSchema);


module.exports= users ;