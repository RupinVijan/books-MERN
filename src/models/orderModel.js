const mongoose = require("mongoose");
const booksModel = require("./booksModel");
const userModel = require("./userModel");

const orderSchema = mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userModel,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "booksModel",
      },
    ],
    joinDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orderSchema", orderSchema);
