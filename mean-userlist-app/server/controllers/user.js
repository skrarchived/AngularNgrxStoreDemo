const express = require("express");
const router = express.Router();

const User = require("./../models/User");

// to get all Users
router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(401).json({ error: "Error Occured" });
    });
});

// to add new User
router.post("/", (req, res) => {
  let u1 = new User(req.body);
  u1.save()
    .then(result => {
      console.log("User Saved");
      res.json({ message: "User Saved" });
    })
    .catch(err => {
      res.json({ error: "Error Occured" });
    });
});

// to delete a User
router.delete("/:userId", (req, res) => {
  let userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then(result => {
      res.json({ message: "User Deleted" });
    })
    .catch({ error: "Error Occured" });
});

module.exports = router;
