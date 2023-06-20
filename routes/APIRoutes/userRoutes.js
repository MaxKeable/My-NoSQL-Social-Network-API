// Importing dependencies
const router = require("express").Router();
// importing controllers
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// GET and POST all users
router.route("/").get(getAllUsers).post(createUser);

// GET, PUT and DELETE users
router
  .route("/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

// POST and DELETE friends
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
// Export the router
module.exports = router;
