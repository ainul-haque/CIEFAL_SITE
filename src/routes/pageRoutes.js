const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title:
      "Cambridge Institute of English For Advanced Learning - CIEFAL | Learn Spoken English | Voice n Accent | TESOL | IELTS | Personality Development",
    description: undefined,
  });
});

router.get("/courses", (req, res) => {
  res.render("courses", {
    title: "Courses | CIEFAL",
    description:
      "Explore our range of Spoken English courses, including study abroad, general speaking, basic and advanced English. Build fluency, confidence and communication skills with expert trainers.",
  });
});

router.get("/admission", (req, res) => {
  res.render("admission", {
    title: "Admission | CIEFAL",
    description:
      "The Admission page of CIEFAL provides information on how to enroll in our Spoken English courses, TESOL, IELTS, and more. Start your journey towards mastering English with us.",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact | CIEFAL",
    description:
      "The Contact page of CIEFAL provides information on how to reach us for inquiries about our Spoken English courses, TESOL, IELTS, and more. Get in touch with our team for assistance.",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About | CIEFAL",
    description:
      "Learn about CIEFAL, the Cambridge Institute of English for Advanced Learning. We specialize in Spoken English courses, TESOL, IELTS, and Personality Development to help you achieve your language goals.",
  });
});

router.get("/thankyou", (req, res) => {
  res.render("thankyou", {
    title: "Thankyou | CIEFAL",
    description: undefined,
  });
});

module.exports = router;
