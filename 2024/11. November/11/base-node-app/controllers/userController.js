const { userModel } = require("./models/userModel.js");

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
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
};
