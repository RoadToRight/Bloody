import mongoose from "mongoose";
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

    const { handle } = req.params;

    if (handle) {
        const product = await ProductModel.findOne({ handle });
        if (product) {
            res.status(200).json({
                success: true,
                message: "Product Get Successfully",
                product
            })
        }
    }

})
export const updateProduct = catchAsyncErrors(async (req, res, next) => {

    const updatedFields = Object.fromEntries(Object.entries(req.body || {}).filter(([_, v]) => v !== undefined));

    const { handle: slug } = req.params;
    let uploadedImages;
    let deletedImagesStatus;

    if (!slug) {
        return next(new ErrorHandler("Product Not Found", 400))
    }
    const images = req.files && Array.isArray(req.files.images) ? req.files.images : [req.files.images];
    if (req.files && req.files.deleteImages) {
        deletedImagesStatus = await Promise.all(req.files.deleteImages.map(async (img) => {
            const deletedStatus = await cloudinary.uploader.destroy(img.public_id);
            return deletedStatus;
        })
        )
    }
    if (req.files && req.files.images && images.length !== 0) {
        uploadedImages = await Promise.all(
            images.map(async (img) => {
                const rawuploadedImages = await cloudinary.uploader.upload(img.tempFilePath, { folder: "Bloody/products" })
                return { url: rawuploadedImages.url, public_id: rawuploadedImages.public_id }
            })
        )


    }
    const updatedProduct = await ProductModel.findOneAndUpdate({ handle: slug }, {
        $set: updatedFields,
        $push: {
            images: {
                $each: uploadedImages
            }
        }
    }, {
        new: true,
        runValidators: true
    });
    if (!updatedProduct) {
        next(new ErrorHandler("Product Not Found", 404))
    }

    res.status(200).json({
        success: true,
        updatedProduct,
        message: "Product Updated Successfully"
    })
})
export const deleteController = catchAsyncErrors(async (req, res, next) => {

    const { handle } = req.params;

    if (!handle) {
        next(new ErrorHandler("Please Provide Product Unique Identifier"))
    }

    const session = await mongoose.startSession();
    session.startTransaction();


    const deletedProduct = ProductModel.findOneAndDelete({ handle }, { new: true, runValidators: true });
    if (!deletedProduct) {
        next(new ErrorHandler("Product Not Find", 400))
    }
    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully!"
    })
})