"use strict";

const express = require("express");
const app = express();

const contact = { Email: "Havivbiton4@gmail.com", Phone: "0525130770" };
const { getProducts, getProductById } = require("./productModule");

app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
  res.send(" This server create by Haviv Bitton!");
});

app.get("/contact", (req, res) => {
  res.json(contact);
});

app.get("/api/product", (req, res) => {
  res.json(getProducts());
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  res.json(getProductById(id));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
