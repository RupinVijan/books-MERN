const express = require("express");
const router = express.Router();
const orderModel = require("../models/orderModel");
const booksModel = require("../models/booksModel");
const jwt = require("jsonwebtoken");

const jwt_token = "bookSample";

router.get("/books/search", async (req, res) => {
  try {
    var books;
    if (req.query.search) {
      if (req.query.category) {
        books = await booksModel.find({
          title: { $regex: req.query.search, $options: "i" },
          category: { $regex: req.query.category, $options: "i" },
        });
      } else {
        books = await booksModel.find({
          title: { $regex: req.query.search, $options: "i" },
        });
      }
    } else if (req.query.category) {
      books = await booksModel.find({
        category: { $regex: req.query.category, $options: "i" },
      });
    }

    res
      .send({ status: true, msg: "Fetching Books", response: books })
      .status(200);
  } catch (error) {
    res.status(500).send({ status: false, msg: "error occured!", error });
  }
});

router.post("/order", async (req, res) => {
  try {
    userId = jwt.verify(req.body.user, jwt_token);
    const { cartList } = req.body;
    const orderPlaced = await orderModel.create({
      buyer: userId.id,
      books: cartList,
    });

    return res
      .send({ status: true, msg: "order placed successfully", orderPlaced })
      .status(201);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
router.get("/order", async (req, res) => {
  try {
    userId = jwt.verify(req.header("userToken"), jwt_token);
    const orderPlaced = await orderModel
      .find({ buyer: userId.id })
      .populate("books");

    return res
      .send({ status: true, msg: "order placed successfully", orderPlaced })
      .status(201);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});

module.exports = router;
