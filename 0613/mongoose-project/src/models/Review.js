const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    writer: {
      type: String,
      required: true,
    },
    movie: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Movie",
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
    toJSON: true,
    toObject: { virtuals: true },
  }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
