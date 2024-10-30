const validateProject = (req, res, next) => {
  if (!req.body.name || !req.body.description || !req.body.deadline) {
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
const validateTask = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).send({
      message: " Missing Fields",
    });
  }
  next();
};

export { validateProject, validateUser, validateTask };
