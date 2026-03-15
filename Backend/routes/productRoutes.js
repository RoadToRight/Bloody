import express from "express";
import { createProductController, deleteProductController, getProductController, updateProductController } from "../controllers/productControllers.js";
import { validateProduct } from "../middlewares/validateRequest.js";

const router = express.Router();
// CREATE PRODUCT
router.post("/create", validateProduct, createProductController);

// GET PRODUCT BY HANDLE
router.get("/:handle", getProductController);

// UPDATE PRODUCT
router.put("/:handle", validateProduct, updateProductController);

// DELETE PRODUCT
router.delete("/:handle", deleteProductController);

export default router;