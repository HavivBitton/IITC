import express from "express";

const router = express.Router();

// Get All Users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send({
        message: "add some user ",
      });
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
});

// Get one random user
// router.get("/:name",

// Add new user
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  console.log(newUser);
});

// Edit user by ID
router.patch("/:id", async (req, res) => {
  const id = req.params["id"];
  const updatedData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedUser) {
      res.status(200).send({ msg: "User Changed successfully!", updatedUser });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error updating user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Delete user by id
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).send({ msg: "User deleted successfully", deletedUser });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error deleting user by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

export default router;
