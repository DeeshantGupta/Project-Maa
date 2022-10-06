const mongoose = require("mongoose");

const CONSTANT = require("../../utils/constants/appContants");

const babySchema = new mongoose.Schema({
    week: {
        type: Number
    },
    title: {
        type: String,
        trim: true
    },
    baby_growth: {
        type: String,
        trim: true
    },
    weight: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },
    baby_lookslike: {
        type: String,
        trim: true
    },
    this_week_changes: {
        type: Array,
        default: []
    }
});

const Baby = mongoose.model(CONSTANT.MODELS.BABY, babySchema);

module.exports = Baby;