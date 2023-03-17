const express = require("express");

const router = express.Router();

const {ctgScan} = require("../controllers/ctgControllers") ;

router.route("/ctg").post(ctgScan);

module.exports = router;