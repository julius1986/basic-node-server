const express = require("express");
const router = express.Router();
const {
  findAllUsers,
  findUserById,
  addNewUser,
  deleteUserById,
  updateUser
} = require("./funcs");

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
  res.send("get user by id " + req.params.id);
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
