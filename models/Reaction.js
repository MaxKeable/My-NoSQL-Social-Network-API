// importing required dependencies
const { Schema, Types } = require("mongoose");

// creating the reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString(), // using the getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true, // allows the getter method to be used on the reaction schema
    },
    id: false, // disables the default '_id' field in the reaction schema to be returned when calling toJSON() method
  }
);
// exporting the reaction schema as a module
module.exports = reactionSchema;
