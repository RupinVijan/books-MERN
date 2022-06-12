const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoose = require("mongoose");
MongoDbURL = "mongodb+srv://lms:rupin@cluster0.jbvdn.mongodb.net/Books";
mongoose.connect(MongoDbURL);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error : "));
db.once("open", function () {
  console.log("Database is Ready.... ");
});

app.use("/api", require("./src/routes/userRoutes"));
app.use("/api", require("./src/routes/booksRoutes"));
app.use("/api", require("./src/routes/filter"));
app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`);
});
