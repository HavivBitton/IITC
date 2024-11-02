import Product from "../models/productModel.js";

// Get All Products
export const getAllProducts = async (req, res) => {
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
};

// Get one random Products
export const getRandomProduct = async (req, res) => {
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
};

// Add new Product
export const addNewProduct = async (req, res) => {
  try {
    const newProduct = new User({
      name: req.body.name,
      price: req.body.price,
    });

    const savedProduct = await newProduct.save();
    res.status(201).send({ msg: "User added successfully!", savedProduct });
  } catch (err) {
    console.error("Error adding new product:", err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get Product by ID
export const getProductByID = async (req, res) => {
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
};

// Edit Product by ID
export const editProductByID = async (req, res) => {
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
};

// Delete Product by id
export const deleteProductByID = async (req, res) => {
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
};
