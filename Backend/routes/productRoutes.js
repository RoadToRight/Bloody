import express from "express";
import { createProduct, deleteController, getProduct, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();
router.get("/:handle", getProduct);
// router.post("/create", createProduct);
// router.patch("/update/:handle", updateProduct);
// router.delete("/delete/:handle", deleteController)

export default router;