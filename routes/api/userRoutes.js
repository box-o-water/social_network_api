const router = require("express").Router();

const {
  getUsers,
  getUser,
  createUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser);

module.exports = router;
