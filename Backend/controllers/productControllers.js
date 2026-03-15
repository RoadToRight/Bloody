import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {
  createProductService,
  getProductByHandleService,
  updateProductService,
  deleteProductService
} from "../services/product.service.js";

// CREATE PRODUCT
export const createProductController = catchAsyncErrors(async (req, res, next) => {
  const product = await createProductService(req.body, req.files, next);
  res.status(201).json({
    success: true,
    data: product,
    message: "Product created successfully"
  });
});

// GET PRODUCT BY HANDLE
export const getProductController = catchAsyncErrors(async (req, res, next) => {
  const { handle } = req.params;
  const product = await getProductByHandleService(handle, next);
  res.status(200).json({
    success: true,
    data: product,
    message: "Product fetched successfully"
  });
});

// UPDATE PRODUCT
export const updateProductController = catchAsyncErrors(async (req, res, next) => {
  const { handle } = req.params;
  const deleteImages = req.body.deleteImages || [];
  const updatedProduct = await updateProductService(handle, req.body, req.files, deleteImages, next);
  res.status(200).json({
    success: true,
    data: updatedProduct,
    message: "Product updated successfully"
  });
});

// DELETE PRODUCT
export const deleteProductController = catchAsyncErrors(async (req, res, next) => {
  const { handle } = req.params;
  if (!handle) return next(new ErrorHandler("Please provide product unique identifier", 400));

  const deletedProduct = await deleteProductService(handle);
  res.status(200).json({
    success: true,
    data: deletedProduct,
    message: "Product deleted successfully"
  });
});