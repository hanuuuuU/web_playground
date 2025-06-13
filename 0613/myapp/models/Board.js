const { default: mongoose } = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    createdAt: { type: Date, default: Date.now },
  },
  {
    // 아래에 있는 virual 스키마까지 보여주겠다는 뜻
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
boardSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "boardID",
});

boardSchema.set("toObject", { virtuals: true });

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
