let express = require("express");
let router = express.Router();

router.use((req, res, next) => {
  res.locals.title = "registration";
  next();
});

router.get("/", function (req, res) {
  res.send("this is registration page");
});

module.exports = router;
