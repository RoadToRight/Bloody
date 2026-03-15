import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../middlewares/errorMiddleware";
import { createCollectionService, getCollectionService } from "../services/collection.service";

export const createCollectionController = catchAsyncErrors(async (req, res, next) => {
    const { name, handle } = req.body;
    if (!handle || !name) {
        next(new ErrorHandler("Please Fill Required Fields", 400))
    }

    const collection = await createCollectionService(req.body, next);
    res.status(201).json({
        success: true,
        collection,
        message: "Collection Created Successfully"
    })
})
export const getCollectionProducts = catchAsyncErrors(async (req, res, next) => {

    await getCollectionService(req.params, next)
})
export const updateCollectionController = catchAsyncErrors(async (req, res, next) => {

})
export const deleteCollectionController = catchAsyncErrors(async (req, res, next) => {

})