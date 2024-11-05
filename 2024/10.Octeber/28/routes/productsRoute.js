import express from "express";
import { validateProduct } from "../middleware/validator.js";
import {
  getAllProducts,
  getRandomProduct,
  addNewProduct,
  getProductByID,
  editProductByID,
  deleteProductByID,
} from "../controllers/productsController.js";
const router = express.Router();

// Get All Products
router.get("/all", getAllProducts);

// Get one random product
router.get("/random", getRandomProduct);

// Add new product
router.post("/", validateProduct, addNewProduct);

// Get product by ID
router.get(`/:id`, getProductByID);

// Edit product by ID
router.patch("/:id", validateProduct, editProductByID);

// Delete product by id
router.delete("/:id", deleteProductByID);

export default router;
