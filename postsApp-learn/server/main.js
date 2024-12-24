const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");

// Post Route
const postsRouter = require("./routes/postsRoute.js");

dotenv.config();

const app = express();
const PORT = 3000;
const DB_URI = process.env.URI;

// Enable CORS for the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB(DB_URI);

// Example route to verify the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Post Route
app.use("/api/posts", postsRouter);
