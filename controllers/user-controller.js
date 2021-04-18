// Code taken and adapted from Module 18 assignment and tutoring with David (TA). 
// Worked with Cori Cathemer and may have some similarities
const { User } = require('../models');

const userController = {
  getAllUsers(req, res){
    User.find()
      .select('-__v')
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getUserById( { params }, res) {
    User.findOne({ _id: params.id })
      .populate(
        { path: 'thoughts', select: "-__v" },
        { path: 'friends', select: "-__v" }
      )
      .select("-__v")
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  
  registerUser({ body }, res){
    User.create(body)
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  updateUser( { params, body }, res){
    User.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true})
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
  },

  deleteUser( { params }, res){
    User.findOneandDelete({ _id: params.id })
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);  
  });
  },

  addFriend( { params }, res){

  },

  deleteFriend( { params }, res){

  }
}

module.exports = userController