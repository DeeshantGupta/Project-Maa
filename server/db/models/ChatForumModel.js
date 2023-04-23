
const mongoose = require("mongoose");

const CONSTANT = require("../../utils/constants/appContants");

const chatForumSchema = new mongoose.Schema({
    chats :{
        type:Array,
        default:[]
    }
});

const chatForum = mongoose.model(CONSTANT.MODELS.CHATFORUM, chatForumSchema);

module.exports = chatForum;