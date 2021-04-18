// Code taken and adapted from Module 18 assignment
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ThoughtSchema = new Schema(
  {
    ThoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    ThoughtBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String,
      required: true
    },
    commentBody: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // use reactionSchema to validate data for a reply
    replies: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Comment = model('Thought', ThoughtSchema);

module.exports = Thought;
