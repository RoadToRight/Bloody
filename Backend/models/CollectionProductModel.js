import mongoose from "mongoose";

const CollectionProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        trim: true,
        required: true,
    },
    collectionId: {
        type: String,
        trim: true,
        required: true,
    }
}, { timestamps: true })

const CollectionProductModel = mongoose.model("CollectionProductRelations", CollectionProductSchema)
export default CollectionProductModel;