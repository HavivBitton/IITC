const validateUser = (req, res, next) => {
  const { fName, lName, phoneNumber, email } = req.body;
  if (!fName || !lName || !phoneNumber || !email) {
    return res.status(400).send({
      status: "error",
      message: "One of the fields is missing",
    });
  }

  next();
};

module.exports = { validateUser };
