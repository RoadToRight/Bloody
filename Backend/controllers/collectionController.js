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
        const priceArr = price.split(",");
        match.price = { $gte: priceArr[0], $lte: priceArr[1] }
    }
    if (properties) {
        const propertiesArr = properties.split(",")
        match.properties = properties;
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