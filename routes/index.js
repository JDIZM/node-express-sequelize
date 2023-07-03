const {
  getUsers,
  createUser,
  getUserById,
  createUserWithBarAssociation,
  updateUser,
} = require("../controllers/user.controller");

module.exports = (router) => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  router.get("/users", getUsers);
  router.post("/users", createUser);
  router.get("/users/:id", getUserById);
  router.put("/users/:id", updateUser);
  router.post("/users/bar", createUserWithBarAssociation);
};
