const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/user", () => {
//   res.send({
//     name: "john Doh"
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} `);
});

// mongodb+srv://HavivBitton:<db_password>@cluster1.5vmwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
