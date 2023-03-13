const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET /api/thoughts
// POST /api/thoughts
// w/JSON body example:
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "sue",
//   "userId": "640d1cd1f45924e6aeb10bf7"
// }
router.route("/").get(getThoughts).post(createThought);

// GET /api/thoughts/:id
// DELETE /api/thoughts/:id
// PUT /api/thoughts/:id
// w/JSON body example:
// {
//   "thoughtText": "Here's a really cool thought...",
//   "username": "sue",
//   "userId": "640d1cd1f45924e6aeb10bf7"
// }
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

// POST /api/thoughts/:thoughtId/reactions
// w/JSON body example:
// {
// 	"reactionBody": "sweet!",
// 	"username": "bob"
// }
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
