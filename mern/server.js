const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  db = require("./config/keys").mongoURI,
  items = require("./routes/api/items");

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started at ${port}`));
