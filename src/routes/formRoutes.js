const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

router.post("/", formController.handleForm);

module.exports = router;
