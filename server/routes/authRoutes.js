const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appContants");

const CTRLS = require("../controllers/authControllers");

router.route(CONSTANTS.AUTH.REGISTER).post(CTRLS.register);

router.route(CONSTANTS.AUTH.LOGIN).post(CTRLS.login);

module.exports = router;