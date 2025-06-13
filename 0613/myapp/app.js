var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const boardRouter = require("./routes/board");
const birdRouter = require("./routes/birds"); //<=이거랑
const commentRouter = require("./models/comment");

const mongoose = require("mongoose");
// DB연결
const DB_URL = "url";
// connect는 Promise 객체
mongoose
  .connect(DB_URL, {
    retryWrites: true,
    w: "majority",
    appName: "express-mongodb-test",
  })
  .then(() => {
    console.log("Connected Successful");
  })
  .catch(() => {
    console.log("error");
  });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/birds", birdRouter); //<=이거 넣음
app.use("/comments", commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render("error");
  res.json(res.locals);
});

module.exports = app;
