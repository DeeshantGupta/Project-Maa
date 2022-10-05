
const mongoose = require("mongoose");

const CONSTANT = require("../../utils/constants/appContants");

const otpSchema = new mongoose.Schema({
    email: {
        type: String
    },
    otp: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    expiredAt: {
        type: Date
    }
});

const Otp = mongoose.model(CONSTANT.MODELS.OTP, otpSchema);

module.exports = Otp;