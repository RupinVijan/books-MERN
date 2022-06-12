const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const jwt_token = "bookSample";
//to get all user
router.get("/user", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    return res
      .status(200)
      .send({ status: true, msg: "Fetching All Users", response: allUsers });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
//signup route
router.post("/signup", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user)
      return res
        .status(404)
        .send({
          status: false,
          msg: "User already Exist!",
          error: "Try With Different Email!",
        });
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    user = await userModel.create({ ...req.body, password: hashedPassword });
    const userToken = jwt.sign({ id: user.id }, jwt_token);
    return res
      .status(200)
      .send({ status: true, msg: "User created Successfully!", userToken });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});
//login Route
router.post("/login", async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(404)
        .send({
          status: false,
          msg: "User not found!",
          error: "Try With Different Email!",
        });
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const userToken = jwt.sign({ id: user.id }, jwt_token);
      return res
        .status(200)
        .send({
          status: true,
          msg: "User loged in Successfully!",
          userToken,
          user,
        });
    }
    return res
      .status(400)
      .send({
        status: false,
        msg: "Invalid Credentials!",
        error: "Unable to Login",
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "error occured!", error });
  }
});

module.exports = router;
