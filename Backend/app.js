import express from "express";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js"
import multer from "multer";

// Intializations
const app = express();
dotenv.config({ path: "./config/.env" });
const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
export const upload = multer({ storage: ImageStorage })

// ---------------------------------------------------

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// ---------------------------------------------------

// Routes
app.use("/products", productRoutes)
// ---------------------------------------------------


dbConnection()
app.use(errorMiddleware)
export default app;