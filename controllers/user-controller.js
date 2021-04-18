// Code taken and adapted from Module 18 assignment and tutoring with David (TA)
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
  
  createUser(req, res){
    User.create(req.body)
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  }
}

module.exports = userController