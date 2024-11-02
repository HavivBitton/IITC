const validateProject = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Missing Fields! You have to enter project name",
    });
  }
  next();
};

const validateUser = (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send({
      message: " Missing Fields",
    });
  }
  next();
};
const validateTask = (req, res, next) => {
  if (!req.body.title || !req.body.projectId) {
    res.status(400).send({
      message: " Missing Fields!",
    });
  }
  next();
};

export { validateProject, validateUser, validateTask };
