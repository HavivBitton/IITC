import express from "express";
import morgan from "morgan";
// import authUser from "./middleware/auth.js";

//Routes import
import projectsRouter from "./routes/projectsRoute.js";
import usersRouter from "./routes/usersRoute.js";
import productRouter from "./routes/tasksRoute.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);
// app.use(authUser);
// app.use(express.static("public"));

//Base route
app.get("/", (req, res) => {
  // res.render("index.html");
});

app.get(`/api/status`, (req, res) => {
  res.send({ status: `Server is running` });
});

//Projects
app.use("/api/projects", projectsRouter);
//Users
app.use("/api/users", usersRouter);
//Product
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
