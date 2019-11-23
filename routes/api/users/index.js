const express = require("express");
const router = express.Router();
const { jsonAnswer } = require("../../../utils/jsonAnswer");
const {
  findAllUsers,
  findUserById,
  addNewUser,
  deleteUserById,
  updateUser
} = require("./funcs");
const { convertToIntegerNumber } = require("../../../utils/utilsFuncs");

router.use("/:id", function(req, res, next) {
  if (!convertToIntegerNumber(req.params.id)) {
    res.send(new jsonAnswer(false, 200, "id is not a number"));
  }
  next();
});

router.get("/", function(req, res) {
  findAllUsers();
  res.send("show all users");
});

router.post("/", function(req, res) {
  addNewUser(req.body.user);
  res.send("add new user");
});

router.get("/:id", function(req, res) {
  findUserById(req.params.id);
  res.send(new jsonAnswer(false, 404, "id is not a number"));
});

router.put("/:id", function(req, res) {
  updateUser(req.params.id, req.body.user);
  res.send("add new user");
});

router.delete("/:id", function(req, res) {
  deleteUserById(req.params.id);
  res.send("add new user");
});

module.exports = router;
