const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appContants");

const CTRLS = require("../controllers/authControllers");

const VALIDATOR = require("../middlewares/Validations/authValidations");

router.route(CONSTANTS.AUTH.REGISTER).post(VALIDATOR.register,CTRLS.register);

router.route(CONSTANTS.AUTH.LOGIN).post(VALIDATOR.login,CTRLS.login);

module.exports = router;