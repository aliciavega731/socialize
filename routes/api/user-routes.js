// Code taken and adapted from Module 18 assignment and tutoring with David (TA)
const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require("../../controllers/user-controller");

// /api/user
router
  .route("/")
  .get(getAllUsers) //get all users
  .post(registerUser); //register a new user

// /api/user/1
router
  .route("/:userId")
  .get(getUserById) //get one user
  .put(updateUser) //update one user
  .delete(deleteUser); //delete one user

// /api/user/1/friends/2
router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
