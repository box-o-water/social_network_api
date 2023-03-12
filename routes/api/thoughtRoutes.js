const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

module.exports = router;
