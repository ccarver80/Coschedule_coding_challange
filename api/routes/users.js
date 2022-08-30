var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { authUser } = require("../middleware/Authenticate");

router.use(express.json());

const users = require("../models").Users;

// Login existing user route
router.get("/user", authUser, async (req, res) => {
  try {
    const user = req.currentUser;
    //If worked sends back user info
    res.status(200).json(user);
  } catch (err) {
    res.json({
      message: "Something went wrong with the server:",
    });
  }
});

// Create a new user post route
router.post("/create_user", async (req, res) => {
  try {
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const hashpass = await bcrypt.hash(req.body.password, salt);
    const newUser = await users.create({
      email: req.body.email,
      username: req.body.username,
      password: hashpass,
    });

    res.status(201).json({ username: req.body.username });
  } catch (err) {
    res.status(404).json({ message: "Sorry something went wrong" });
  }
});

module.exports = router;
