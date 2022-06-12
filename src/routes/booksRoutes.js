const express = require("express");
const router = express.Router();
const booksModel = require("../models/booksModel");
const userModel = require("../models/userModel");

router.get("/book", async (req, res) => {
  try {
    const books = await booksModel.find();
    return res
      .status(200)
      .send({ status: true, msg: "fetching all books!", response: books });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
router.post("/book", async (req, res) => {
  try {
    var book = await booksModel.findOne({ title: req.body.title });
    if (book)
      return res
        .status(400)
        .send({
          status: false,
          msg: "book already exist",
          error: "Try with different title",
        });
    if (req.body.owner) {
      let owner = await userModel.findOne({ email: req.body.owner });
      book = await booksModel.create({ merchant: owner.id, ...req.body });
    } else {
      book = await booksModel.create(req.body);
    }
    return res.status(200).send({ status: true, msg: "book added!", book });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
router.get("/book/:id", async (req, res) => {
  try {
    const book = await booksModel.findById(req.params.id);
    if (!book)
      return res
        .status(404)
        .send({ status: false, msg: "book not found", error: "Invalid Id" });
    return res
      .status(200)
      .send({ status: true, msg: "fetching book!", response: book });
  } catch (error) {
    res.status(500).send({ status: false, msg: "error occured!", error });
  }
});
router.put("/book/:id", async (req, res) => {
  try {
    const book = await booksModel.findById(req.params.id);
    if (!book)
      return res
        .status(404)
        .send({ status: false, msg: "book not found", error: "Invalid Id" });
    book = await booksModel.findByIdAndUpdate(req.params.id, req.body);
    return res
      .status(200)
      .send({
        status: true,
        msg: "book info Updated Successfully!",
        response: book,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
router.delete("/book/:id", async (req, res) => {
  try {
    const book = await booksModel.findById(req.params.id);
    if (!book)
      return res
        .status(404)
        .send({ status: false, msg: "book not found", error: "Invalid Id" });
    book = await booksModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .send({
        status: true,
        msg: "book info Deleted Successfully!",
        response: book,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});

module.exports = router;
