import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import ProductModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

export const createProduct = catchAsyncErrors(async (req, res, next) => {
    const { name, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle } = req.body;
    let images = [];
    let uploadedImages = [];
    if (!name || price == null || !productDetails || !specifications || !software || !handle) {
        return next(new ErrorHandler("Please Fill Required Fields To Create Product", 400))
    }
    if (req.files && req.files.images) {
        images = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
    }
    if (req.files && req.files.images && req.files.images.length > 0) {

        uploadedImages = await Promise.all(images.map(async (img) => {
            const rawuploadedImages = await cloudinary.uploader.upload(img.tempFilePath, {
                folder: "Bloody/products"
            });
            return { url: rawuploadedImages?.secure_url, public_id: rawuploadedImages?.public_id }
        })
        )

    }
    const product = await ProductModel.create({ name, uploadedImages, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle })


    if (product) {
        res.status(201).json({
            success: true,
            product,
            message: "Product Created Successfully",
        })
    } else {
        if (uploadedImages && uploadedImages.length > 0) {
            await Promise.all(
                uploadedImages.map(async (img) => {
                    await cloudinary.uploader.destroy(img.public_id)
                })
            )
        }

        return next(new ErrorHandler("Failed To Create Product", 400))
    }
})
export const getProduct = catchAsyncErrors(async (req, res, next) => {

})
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
    const { name, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle } = req.body;

    const { handle: slug } = req.params;
    if (!slug) {
        return next(new ErrorHandler("Product Not Found", 400))
    }
    const updatedProduct = await ProductModel.findOneAndUpdate({ handle: slug }, { name, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle }, {

    });
    if (updatedProduct) {

    }
})
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const { name, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle } = req.body;
    const { handle: slug } = req.params;
    if (!slug) {
        return next(new ErrorHandler("Product Not Found", 400))
    }
    const deletedProduct = await ProductModel.findOneAndDelete({ handle: slug }, { name, price, variants, rating, productDetails, specifications, socialLinks, tags, properties, software, handle }, {

    });
    if (deletedProduct) {

    }
})