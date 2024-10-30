import express from "express";
// import { validateProduct } from "../middleware/validator.js";

// Import Product Model
import Product from "../models/productModel.js";

const router = express.Router();

// Get All Products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      res.send({
        message: "add some product",
      });
    } else {
      res.send(products);
    }
  } catch (error) {
    res.status(500).send("Unknown server error");
  }
});

// Get one random product
router.get("/random", async (req, res) => {
  try {
    const randomProduct = await Product.aggregate([{ $sample: { size: 1 } }]);

    if (randomProduct.length > 0) {
      res.status(200).send(randomProduct[0]);
    } else {
      res.status(404).send({ error: "No products found" });
    }
  } catch (err) {
    console.error("Error fetching random product:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Add new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
    });

    const savedUser = await newUser.save();
    res.status(201).send({ msg: "User added successfully!", savedUser });
  } catch (err) {
    console.error("Error adding new user:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Get product by ID
router.get(`/:id`, async (req, res) => {
  const id = req.params[`id`];

  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Edit product by ID
router.patch("/:id", async (req, res) => {
  const id = req.params["id"];
  const updatedData = { name: req.body.name, price: req.body.price };

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (updatedProduct) {
      res
        .status(200)
        .send({ msg: "Product Changed successfully!", updatedProduct });
    } else {
      res.status(404).send({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Error updating product by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

// Delete product by id
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (deletedProduct) {
      res
        .status(200)
        .send({ msg: "Product deleted successfully", deletedProduct });
    } else {
      res.status(404).send({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Error deleting product by ID:", err);
    res.status(500).send({ error: "Server error" });
  }
});

export default router;
