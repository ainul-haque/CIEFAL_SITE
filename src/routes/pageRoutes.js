const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/courses", (req, res) => {
  res.render("courses");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/thankyou", (req, res) => {
  res.render("thankyou");
});

module.exports = router;
