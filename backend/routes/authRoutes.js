const express = require("express");
const googleAuth = require("../controllers/authController");
const router = express.Router();

router.post("/", googleAuth);

module.exports = router;
