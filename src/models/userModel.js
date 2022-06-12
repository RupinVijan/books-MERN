const mongoose = require("mongoose");
const booksModel = require("./booksModel");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "booksModel",
      },
    ],
    loginType: {
      type: String,
      default: "userLogin",
      enum: ["userLogin", "merchantLogin", "adminLogin"],
    },
    joinDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModel", productSchema);
