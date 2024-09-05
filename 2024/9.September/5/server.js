const axios = require("axios");
const express = require("express");

const app = express();
const port = 3000;

const baseURL = "https://fakestoreapi.com/products/";

let productId = 1;

// GET ALL PRODUCTS
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}`);
    res.json(response.data);
  } catch (err) {
    console.error("Get All products Error", err);
    res.status(500).send("Server Error");
  }
});

// GET SINGLE PRODUCT PRODUCTS
app.get(`/products/:${productId}`, async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}${productId}`);
    res.json(response.data);
  } catch (err) {
    console.error("API Error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
