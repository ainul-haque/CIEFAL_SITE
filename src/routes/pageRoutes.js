const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title: "Cambridge Institute of English For Advanced Learning - CIEFAL | Learn Spoken English | Voice n Accent | TESOL | IELTS | Personality Development"});
});

router.get("/courses", (req, res) => {
  res.render("courses", {title: "Courses | CIEFAL"});
});

router.get("/admission", (req, res) => {
  res.render("admission", {title: "Admission | CIEFAL"});
});

router.get("/contact", (req, res) => {
  res.render("contact", {title: "Contact | CIEFAL"});
});

router.get("/about", (req, res) => {
  res.render("about", {title: "About | CIEFAL"});
});

router.get("/thankyou", (req, res) => {
  res.render("thankyou", {title: "Thankyou | CIEFAL"});
});

module.exports = router;
