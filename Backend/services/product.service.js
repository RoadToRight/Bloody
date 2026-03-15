import mongoose from "mongoose";
import ProductModel from "../models/productModel.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const createProductService = async (data, files, next) => {
  let uploadedImages = [];
  if (files?.images) {
    const images = Array.isArray(files.images) ? files.images : [files.images];
    uploadedImages = await Promise.all(images.map(img => uploadImage(img.tempFilePath)));
  }


  const product = await ProductModel.create({ ...data, images: uploadedImages });

  if (!product) {
    if (uploadedImages) {
      await Promise.all(uploadedImages.map((img) => {
        deleteImage(img?.public_id)
      }))
    }
    next(new ErrorHandler("Product Creation Failed", 400))
  }
  return product;
};

export const getProductByHandleService = async (handle, next) => {
  const product = await ProductModel.findOne({ handle }).lean();
  if (!product) next(new ErrorHandler("Product not found", 404));
  return product;
};

export const updateProductService = async (handle, data, files, deleteImages = [], next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updatedFields = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== undefined)
    );
    const product = await ProductModel.findOne({ handle }).session(session);
    if (!product) next(new ErrorHandler("Product not found", 404));

    // Delete images
    if (deleteImages.length) {
      await Promise.all(deleteImages.map(public_id => deleteImage(public_id)));
      product.images = product.images.filter(img => !deleteImages.includes(img.public_id));
    }

    // Upload new images
    if (files?.images) {
      const images = Array.isArray(files.images) ? files.images : [files.images];
      const uploadedImages = await Promise.all(images.map(img => uploadImage(img.tempFilePath)));
      product.images.push(...uploadedImages);
    }

    Object.assign(product, updatedFields)

    await product.save({ session });
    await session.commitTransaction();
    return product;
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};

export const deleteProductService = async (handle) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await ProductModel.findOne({ handle }).session(session);
    if (!product) throw new ErrorHandler("Product not found", 404);

    // Delete all images
    if (product.images?.length) {
      await Promise.all(product.images.map(img => deleteImage(img.public_id)));
    }

    await product.deleteOne({ session });
    await session.commitTransaction();
    return product;
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};