const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    thumbnail: {
      type: String,
      unique: true,
    },
    story: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id", // 리뷰에서 참조하고 있는 Movie의 필드
  foreignField: "movie", // 리뷰에서 참조를 저장하고 있는 필드
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
