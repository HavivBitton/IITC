import express from "express";

const app = express();

const PORT = process.env.port || 3000;

app.use(express.json());

const jokes = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  { id: 3, joke: "What do you call fake spaghetti? An impasta!" },
  { id: 4, joke: "Why did the bicycle fall over? It was two-tired!" },
  { id: 5, joke: "What do you call cheese that isn't yours? Nacho cheese!" },
  { id: 6, joke: "How does a penguin build its house? Igloos it together!" },
  {
    id: 7,
    joke: "What did the ocean say to the shore? Nothing, it just waved!",
  },
  {
    id: 8,
    joke: "Why can't your nose be 12 inches long? Because then it would be a foot!",
  },
  {
    id: 9,
    joke: "What did one wall say to the other? I'll meet you at the corner!",
  },
  {
    id: 10,
    joke: "Why don’t skeletons fight each other? They don’t have the guts!",
  },
];

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hank" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
];

const products = [
  { id: 101, name: "Laptop", price: 999.99 },
  { id: 102, name: "Smartphone", price: 699.99 },
  { id: 103, name: "Headphones", price: 199.99 },
  { id: 104, name: "Keyboard", price: 49.99 },
  { id: 105, name: "Mouse", price: 29.99 },
  { id: 106, name: "Monitor", price: 299.99 },
  { id: 107, name: "Tablet", price: 399.99 },
  { id: 108, name: "Smartwatch", price: 149.99 },
  { id: 109, name: "Camera", price: 499.99 },
  { id: 110, name: "Printer", price: 89.99 },
];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get(`/api/status`, (req, res) => {
  res.send({ status: `Server is running` });
});

app.get(`/api/jokes/random`, (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
});

app.post(`/api/jokes/`, (req, res) => {
  let newJoke = {
    id: jokes.length + 1,
    joke: req.body.joke,
  };
  jokes.push(newJoke);

  res.send(`The joke ${newJoke.joke} is in id ${newJoke.id}`);
});

app.get(`/api/users/random`, (req, res) => {
  const randomUsers = users[Math.floor(Math.random() * users.length)];
  res.send(randomUsers);
});

app.post(`/api/users/`, (req, res) => {
  let newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  res.send(`The user " ${newUser.name} " is in new in id ${newUser.id}`);
});

app.get(`/api/product/random`, (req, res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send(
    `The product is ${randomProduct.name} and his price is ${randomProduct.price}`
  );
});

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
