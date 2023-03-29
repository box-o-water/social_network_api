const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      // .populate("thoughts")
      .populate({
        path: "thoughts",
        // remove the default versionKey from the query result
        select: "-__v",
      })
      .populate({
        path: "friends",
        // remove the default versionKey from the query result
        select: "-__v",
      })
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (users) => {
        res.json({
          users,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Create a user
  // {
  //   "username": "sue",
  //   "email": "sue@sue.com"
  // }
  createUser(req, res) {
    User.create(req.body)
      // remove the default versionKey from the query result
      // .select("-__v")
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Get a user by id
  getUser(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "thoughts",
        // remove the default versionKey from the query result
        select: "-__v",
      })
      .populate({
        path: "friends",
        // remove the default versionKey from the query result
        select: "-__v",
      })
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a user by id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("friends")
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user by id
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
      .populate("friends")
      // remove the default versionKey from the query result
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Add a friend to a user by id
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a friend from a user by id
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
