const mongoose = require("mongoose");
const Loc = mongoose.model("Location");

const reviewsReadOne = (req, res) => {};
const reviewsCreate = (req, res) => {};
const reviewsUpdateOne = (req, res) => {};
const reviewsDeleteOne = (req, res) => {};

module.exports = {
  reviewsCreate,
  reviewsDeleteOne,
  reviewsUpdateOne,
  reviewsReadOne,
};
