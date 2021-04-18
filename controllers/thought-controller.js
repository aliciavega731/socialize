// Code taken and adapted from Module 18 assignment
const { Thought, User } = require("../models");

const thoughtController = {
  // Grabs all of the thoughts api/thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Creates a thought
  addThought({ body }, res) {
    Thought.create(body)
      .then((data) => {
        return User.findOneAndUpdate(
          { _id: body.id },
          { $push: { thoughts: data.id } },
          { new: true }
        );
      })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  // Deletes a thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        User.findOneAndUpdate(
          { username: data.username },
          { $pull: { thoughts: params.id } }
        );
      })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  // Updates a thought
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  // add reaction to thought
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  // removes reaction
  removeReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(DataTransfer))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
