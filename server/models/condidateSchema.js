const mongoose = require ("mongoose");
const validator = require("validator")

const condidateSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim: true
    },
    lname:{
        type: String,
        required:true,
        trim: true
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
        trim: true
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
const condidates = mongoose.model("condidates",condidateSchema);


module.exports= condidates ;