const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appContants");

const CTRLS = require("../controllers/userControllers");

const VALIDATOR = require("../middlewares/Validations/userValidations");

const VERIFY = require("../middlewares/Auth/userAuth");

router.route(CONSTANTS.USER.CHECKUSER).get(VERIFY.checkUser);

router.route(CONSTANTS.USER.GETUSER).get(CTRLS.getUser);

router.route(CONSTANTS.USER.POSTDETAILS).post(VALIDATOR.detailsOne,CTRLS.postDetails);

module.exports = router;