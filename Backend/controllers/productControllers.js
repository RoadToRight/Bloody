import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import ProductModel from "../models/productModel.js";

export const createProduct = catchAsyncErrors(async (req, res, next) => {
    const { name, images, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle } = req.body;

    if (!name || !price || !productDetails || !specifications || !software || !handle) {
        return next(new ErrorHandler("Please Fill Required Fields To Create Product"))
    }

    const Product = await ProductModel.create({ name, images, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle })

    if(Product){
        
    }
})
export const getProduct = catchAsyncErrors(async (req, res, next) => {

})
export const updateProduct = catchAsyncErrors(async (req, res, next) => {

})
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {

})