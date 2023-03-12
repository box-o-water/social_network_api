const { Thought } = require("../models");

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
};
