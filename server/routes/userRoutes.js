const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appContants");

const CTRLS = require("../controllers/userControllers");

const CTRLS2 = require("../controllers/doctorControllers");

const VALIDATOR = require("../middlewares/Validations/userValidations");

const VERIFY = require("../middlewares/Auth/userAuth");

router.route(CONSTANTS.USER.CHECKUSER).post(VERIFY.checkUser);

router.route(CONSTANTS.USER.GETUSER).get(CTRLS.getUser);

router.route(CONSTANTS.USER.POSTDETAILS).post(VALIDATOR.detailsOne,CTRLS.postDetails);

router.route(CONSTANTS.USER.MOTHERCHILDINFO).get(CTRLS.motherChildInfo);

router.route(CONSTANTS.USER.MOTHERFOOD).get(CTRLS.motherFood);

router.route(CONSTANTS.USER.BABYCHANGES).get(CTRLS.babyChanges);

router.route(CONSTANTS.USER.DOCTOR).post(CTRLS2.registerDoctor);

router.route(CONSTANTS.USER.CALL).post(CTRLS.call);

router.route(CONSTANTS.USER.RECOMMEND).post(CTRLS.recommendFood);

module.exports = router;