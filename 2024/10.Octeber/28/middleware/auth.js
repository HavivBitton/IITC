export default function authUser(req, res, next) {
  console.log(req.query.apiKey);
  if (req.query.apiKey) {
    if (req.query.apiKey === "123456789") {
      next();
    }
    res.status(301).send("Wrong API Key");
  }
  res.send("No API Key provided");
}
