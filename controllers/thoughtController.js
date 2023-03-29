const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (thoughts) => {
        res.json({
          thoughts,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Create a thought
  // username seems redundant but required in the Thought model
  // {
  //   "thoughtText": "Here's a cool thought...",
  //   "username": "sue",
  //   "userId": "640d1cd1f45924e6aeb10bf7"
  // }
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.user_id },
          // { $push: { thoughts: _id } }, // alternative to addToSet, for posterity's sake
          { $addToSet: { thoughts: _id } },
          { new: true }
        );
      })
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get thought by id
  getThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a thought by id
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought by id
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.id })
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Add reaction to a thought by id
  // {
  //   "reactionBody": "sweet!",
  //   "username": "bob"
  // }
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a reaction from a thought by id
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
