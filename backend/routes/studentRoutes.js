const express = require("express");
const router = express.Router();
const { saveStudentData } = require("../controllers/allControllers");

router.post("/data", saveStudentData);

module.exports = router;
