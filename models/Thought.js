const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

// Schema to create Reaction subdocument
const reactionSchema = new Schema(
  {
    // using mongoose's ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // format: Jan 01, 2023 12:34 pm
      get: (createdAtData) =>
        dayjs(createdAtData).format("MMM DD, YYYY hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // format: Jan 01, 2023 12:34 pm
      get: (createdAtData) =>
        dayjs(createdAtData).format("MMM DD, YYYY hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
