const {
  getUsers,
  createUser,
  getUserById,
  createUserWithBarAssociation,
} = require("../controllers/user.controller");

module.exports = function (router) {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  router.get("/users", getUsers);
  router.post("/users", createUser);
  router.get("/users/:id", getUserById);
  router.post("/users/bar", createUserWithBarAssociation);
};
