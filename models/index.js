// Purpose: Exporting the User and Thought models as a single module for easy access in other parts of the application
const User = require("./User");
const Thought = require("./Thought");

// exporting the User and Thought models as a single module
module.exports = { Thought, User };
