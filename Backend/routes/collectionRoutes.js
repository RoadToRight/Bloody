import express from "express";
import { createCollectionController, deleteCollectionController, getCollectionController, updateCollectionController } from "../controllers/CollectionControllers.js";
import { validateCollection } from "../middlewares/validateRequest.js";

const router = express.Router();
// CREATE Collection
router.post("/create", validateCollection, createCollectionController);

// GET Collection BY HANDLE
router.get("/:handle", getCollectionController);

// UPDATE Collection
router.put("/:handle", validateCollection, updateCollectionController);

// DELETE Collection
router.delete("/:handle", deleteCollectionController);

export default router;