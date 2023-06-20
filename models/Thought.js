// importing required dependencies
const { Schema, model } = require("mongoose");
// importing the reaction schema to use as a subdocument schema
const reactionSchema = require("./Reaction");

// creating the thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlenght: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // using the getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// creating a virtual property 'reactionCount' which returns the number of reactions in the reactions array
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// creating the Thought model from the thoughtSchema
const Thought = model("Thought", thoughtSchema);

// exporting the Thought model as a module
module.exports = Thought;
