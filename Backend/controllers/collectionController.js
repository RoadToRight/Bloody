import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ProductModel from "../models/productModel";

export const getCollectionProducts = catchAsyncErrors(async (req, res, next) => {
    const { search, tags, properties, software, rating, price, color } = req.query;
    const match = {};
    if (software) {
        match.software = software;
    }
    if (rating) {
        match.rating = rating;
    }
    if (price) {
        match.price = { $gte: price.min, $lte: price.max }
    }

    if (properties) {

        match.properties = properties
    }
    ProductModel.aggregate([
        {
            $match: {
                price: { $gte: 0 },
                status: ""
            }
        }
    ])
})