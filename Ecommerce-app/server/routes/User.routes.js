const router = require("express").Router();
const User = require("../model/User.model");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.json(user);
  } catch (response) {
    if (response.code === 11000)
      return res.status(400).send("Email already exists");
    res.status(400).send(response.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user);
  } catch (response) {
    res.status(400).send(response.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).populate("orders");
    res.json(users);
  } catch (response) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
