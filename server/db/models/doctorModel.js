const mongoose = require("mongoose");

const CONSTANTS = require("../../utils/constants/appContants");

const doctorSchema = new mongoose.Schema({
        name:{
            type:String
        },
        designation:{
            type:String
        },
        email:{
            type:String
        },
        password : {
            type : String
        },
        hospital_name_address:{
            type:String
        },
        image:{
            type:String
        },
        description:{
            type:String
        },
        detailsFlag :{
            type : Boolean , 
            default : false 
        },
        verified : {
            type: Boolean , 
            default : false 
        }
});

const Doctor = mongoose.model(CONSTANTS.MODELS.DOCTOR, doctorSchema);

module.exports = Doctor;