import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
// import authUser from "./middleware/auth.js";

//Routes import
import projectsRouter from "./routes/projectsRoute.js";
import usersRouter from "./routes/usersRoute.js";
import tasksRouter from "./routes/tasksRoute.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(morgan("tiny"));
// app.use(logRequest);
// app.use(authUser);
// app.use(express.static("public"));

//Connection to mongoDB
const uri =
  "mongodb+srv://havivbitton:oymP7kX1sjT0NUUl@havivbitton.lb0zs.mongodb.net/?retryWrites=true&w=majority&appName=HavivBitton";
mongoose.connect(uri).then(() => {
  console.log("connected to mongoDB");
});

// //Base route
// app.get("/", (req, res) => {
//   // res.render("index.html");
// });

app.get(`/api/status`, (req, res) => {
  res.send({ status: `Server is running` });
});

//Projects
app.use("/api/projects", projectsRouter);
//Users
app.use("/api/users", usersRouter);
//Product
app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
