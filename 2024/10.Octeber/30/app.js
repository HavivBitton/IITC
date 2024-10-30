import express from "express";
import mongoose from "mongoose";
// import

const uri =
  "mongodb+srv://havivbitton:oymP7kX1sjT0NUUl@havivbitton.lb0zs.mongodb.net/?retryWrites=true&w=majority&appName=HavivBitton";
mongoose.connect(uri).then(() => {
  console.log("connected");
});

const PORT = 3000;

const app = express();

app.get("/", (_req, res) => {
  res.send({
    message: "Hello",
  });
});

app.listen(PORT, () => {
  console.log(`Server is run on port: ${PORT}`);
});
