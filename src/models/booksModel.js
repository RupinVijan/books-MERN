const mongoose = require("mongoose");
const userModel = require("./userModel");

const booksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    releasedOn: {
      type: String,
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    coverPic: {
      type: String,
    },
    numberOfCopies: {
      type: Number,
    },
    category: [{ type: String }],
    merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("booksModel", booksSchema);
