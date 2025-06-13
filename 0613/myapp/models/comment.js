const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    writer: {
      type: String,
      required: true,
    },
    boardID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Board",
    },
    title: {
      type: String,
      required: true,
      validate: function (val) {
        return val.trim() !== "" && val.length > 1;
      },
    },
    content: {
      type: String,
      default: "",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
