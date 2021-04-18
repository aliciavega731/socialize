// Code taken and adapted from Module 18 assignment
const { Thought, User } = require('../models');

const thoughtController = {
  // Grabs all of the thoughts api/thoughts
  getAllThoughts(req, res){
    Thought.find()
      .select('-__v')
      .then((data)=>{res.json(data)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  
  // Creates a thought
  addThought(req, res) {
    Comment.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(data);
      })
      .catch(err => res.json(err));
  },

  // add reply to comment
  addReply({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

  // remove thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        User.findOneAndUpdate(
          { _id: data.username },
          { $pull: { thoughts: params.id } },
        )
      })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },
  // remove reaction
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;
