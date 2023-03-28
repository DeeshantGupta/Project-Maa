const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appContants");

const CTRLS = require("../controllers/authControllers");

const VALIDATOR = require("../middlewares/Validations/authValidations");

router.route(CONSTANTS.AUTH.REGISTER).post(VALIDATOR.register,CTRLS.register);

router.route(CONSTANTS.AUTH.LOGIN).post(VALIDATOR.login,CTRLS.login);

router.route(CONSTANTS.AUTH.VERIFYEMAIL).post(VALIDATOR.verifyEmail,CTRLS.verifyEmail);

router.route(CONSTANTS.AUTH.VERIFYOTP).post(VALIDATOR.verifyOtp,CTRLS.verifyOtp);

router.route(CONSTANTS.AUTH.NEWPASSWORD).post(VALIDATOR.newPassword,CTRLS.newPassword);


module.exports = router;