import express from "express";
import fs from "fs";
import morgan from "morgan";
import { logRequest } from "./middleware/logger.js";
// import authUser from "./middleware/auth.js";

//Routes import
import jokesRouter from "./routes/jokesRoute.js";
import usersRouter from "./routes/usersRoute.js";

const app = express();
const PORT = process.env.port || 3000;

// Dummy DB Import
// import users from "./db/users.json" assert { type: "json" };
import products from "./db/product.json" assert { type: "json" };

app.use(express.json());
app.use(morgan("short"));
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

//Jokes
app.use("/api/jokes", jokesRouter);
//Users
app.use("/api/users", usersRouter);

// Get random product
app.get(`/api/product/random`, (req, res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send(
    `The product is ${randomProduct.name} and his price is ${randomProduct.price}`
  );
});

// Get product bu ID
app.get(`/api/products/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = products.find((product) => product.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new product
app.post(`/api/product/`, (req, res) => {
  let newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);

  res.send(
    `The product " ${newProduct.name} " is in new in id ${newProduct.id}, and his price is "${newProduct.price}"`
  );
});

//Edit product by id
app.patch(`/api/products/:id`, (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    products[productIndex].name = req.body.name;
    products[productIndex].price = req.body.price;

    fs.writeFile(
      "./db/product.json",
      JSON.stringify(products, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing to file");
          res.send({ error: "Failed to update the product" });
        } else {
          res.send(
            `The product with id ${id} names is now updated to: ${req.body.name} and his price is ${req.body.price}`
          );
        }
      }
    );
  } else {
    res.send({ error: "product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
