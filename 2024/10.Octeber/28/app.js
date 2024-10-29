import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.port || 3000;

// Dummy DB Import
import jokes from "./db/jokes.json" assert { type: "json" };
import users from "./db/users.json" assert { type: "json" };
import products from "./db/product.json" assert { type: "json" };

app.use(express.json());
// app.use(morgan("short"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get(`/api/status`, (req, res) => {
  res.send({ status: `Server is running` });
});

// Get random jokes
app.get(`/api/jokes/random`, (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
});

// Get joke bu ID
app.get(`/api/jokes/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = jokes.find((joke) => joke.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new jokes
app.post(`/api/jokes/`, (req, res) => {
  let newJoke = {
    id: jokes.length + 1,
    joke: req.body.joke,
  };
  jokes.push(newJoke);

  res.send(`The joke ${newJoke.joke} is in id ${newJoke.id}`);
});

//Edit joke by id
app.patch(`/api/jokes/:id`, (req, res) => {
  const id = +req.params.id;
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);

  if (jokeIndex !== -1) {
    jokes[jokeIndex].joke = req.body.joke;

    fs.writeFile("./db/jokes.json", JSON.stringify(jokes, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file");
        res.send({ error: "Failed to update the joke" });
      } else {
        res.send(`The joke with id ${id} is now updated to: ${req.body.joke}`);
      }
    });
  } else {
    res.send({ error: "Joke not found" });
  }
});

// Get random users
app.get(`/api/users/random`, (req, res) => {
  const randomUsers = users[Math.floor(Math.random() * users.length)];
  res.send(randomUsers);
});

// Get users bu ID
app.get(`/api/users/:id`, (req, res) => {
  const id = +req.params[`id`];
  const data = users.find((user) => user.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "ERROR",
  });
});

// Add new users
app.post(`/api/users/`, (req, res) => {
  let newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  res.send(`The user " ${newUser.name} " is in new in id ${newUser.id}`);
});

//Edit user by id
app.patch(`/api/users/:id`, (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex].name = req.body.name;

    fs.writeFile("./db/users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file");
        res.send({ error: "Failed to update the user" });
      } else {
        res.send(
          `The user with id ${id} names is now updated to: ${req.body.name}`
        );
      }
    });
  } else {
    res.send({ error: "user not found" });
  }
});

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
