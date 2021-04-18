// Code taken and adapted from Module 18 assignment and tutoring with David (TA)
const router = require('express').Router();

const { getAllUsers, registerUser } = require('../../controllers/user-controller');

// /api/user
router.route('/')
  .get(getAllUsers) //get all userts
  .post(registerUser) //register a new user

// /api/user/1
router.route('/:userId')
  .get() //get one user
  .put() //update one user
  .delete() //delete one user

// /api/user/1/friends/2
router.route('/:userId/friends/:friendId')
  .post()
  .delete()

module.exports = router