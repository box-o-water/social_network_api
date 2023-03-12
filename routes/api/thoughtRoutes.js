const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getThought);

module.exports = router;
