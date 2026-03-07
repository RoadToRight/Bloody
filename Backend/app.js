import express from "express";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js"

// Intializations
const app = express();
dotenv.config({ path: "./config/.env" })
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