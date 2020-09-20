const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const dbURL = "mongodb://localhost:27017/ngserver";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => {
    console.log("Error in DB Connection  : ", err.name);
  });

app.use(cors());
app.use(express.json());

// Req logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Controller
app.use("/api/user", require("./controllers/user"));

app.listen(3000, () => console.log("Serving on 3000"));
