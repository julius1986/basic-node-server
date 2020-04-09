var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  res.locals.title = "Main page";
  next();
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Index", message: "This is index page." });
});

module.exports = router;
