let findAllUsers = function() {
  console.log("return all users");
};

let addNewUser = function(newUser) {
  console.log("add new user");
};

let findUserById = function(id) {
  console.log("find one users by id");
};

let deleteUserById = function(id) {
  console.log("delete one users by id");
};

let updateUser = function(id, user) {
  console.log("update one users by id");
};

module.exports = {
  findAllUsers,
  findUserById,
  addNewUser,
  deleteUserById,
  updateUser
};
