const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
