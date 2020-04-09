let express = require("express");
let router = express.Router();

router.use((req, res, next) => {
  res.locals.title = "registration";
  res.locals.error = null;
  next();
});

router.get("/", function (req, res) {
  res.render("registration");
});

router.post("/", function (req, res) {
    res.render("registration");
});

module.exports = router;
