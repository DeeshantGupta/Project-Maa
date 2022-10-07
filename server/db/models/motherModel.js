const mongoose = require("mongoose");

const CONSTANT = require("../../utils/constants/appContants");

const motherSchema = new mongoose.Schema({
    week:{
        type:Number
    },
    data:{
        type:Array,
        default:[]
    },
    symptoms:{
        type:Array,
        default:[]
    },
    tips:{
        type:Array,
        default:[]
    },
    checkups_test_vaccines:{
        type:Array,
        default:[]
    },
    exercises: {
        type:Array,
        default:[]
    }
});

const Mother = mongoose.model(CONSTANT.MODELS.MOTHER, motherSchema);

module.exports = Mother;