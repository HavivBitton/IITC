import express from "express";
import fs from "fs";
import { validateProduct } from "../middleware/validator.js";

// Dummy DB Import
import products from "../db/product.json" assert { type: "json" };

const router = express.Router();

// Get random product
router.get(`/random`, (req, res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send(
    `The product is ${randomProduct.name} and his price is ${randomProduct.price}`
  );
});

// Get product bu ID
router.get(`/:id`, (req, res) => {
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
router.post(`/`, validateProduct, (req, res) => {
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
router.patch(`/:id`, (req, res) => {
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

export default router;
