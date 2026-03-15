import ErrorHandler from "../middlewares/errorMiddleware";
import collectionModel from "../models/collectionModel";
import { uploadImage } from "../utils/cloudinary";

export const createCollectionService = async (data, file, next) => {

    let collectionImg;
    if (file?.image) {
        collectionImg = await uploadImage(file.tempFilePath);
    }
    const collection = await collectionModel.create({ data, collectionImg });

    if (!collection) {
        next(new ErrorHandler("Collection Creation Failed!", 400))
    }
    return collection;


};


export const getCollectionService = async (params, next) => {

    const { price, variants, rating, tags, properties, software } = params;

}