const validateJoke = (req, res, next) => {
  if (!req.body.joke) {
    res.status(400).send({
      message: " Missing Fields",
    });
  }
  next();
};

const validateUser = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: " Missing Fields",
    });
  }
  next();
};
const validateProduct = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).send({
      message: " Missing Fields",
    });
  }
  next();
};

export { validateJoke, validateUser, validateProduct };
