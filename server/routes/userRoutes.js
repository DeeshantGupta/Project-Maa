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

<<<<<<< HEAD
router.route(CONSTANTS.USER.DOCTORINFO).get(CTRLS2.DoctorInfo);
// router.route(CONSTANTS.USER.CALL).post(CTRLS.call);
=======
router.route(CONSTANTS.USER.CALL).post(CTRLS.call);

>>>>>>> 6f8024cc83ecf8cb45b0c2d00e7457c514459f49
module.exports = router;