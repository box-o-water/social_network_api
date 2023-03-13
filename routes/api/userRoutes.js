const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// GET /api/users
// POST /api/users
// w/JSON body example:
// {
// 	"username": "sue",
// 	"email": "sue@sue.com"
// }
router.route("/").get(getUsers).post(createUser);

// GET /api/users/:id
// DELETE /api/users/:id
// PUT /api/users/:id
// w/JSON body example:
// {
// 	"username": "sue",
// 	"email": "suesue@sue.com"
// }
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// POST /api/users/:userId/friends/:friendId
// DELETE /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
