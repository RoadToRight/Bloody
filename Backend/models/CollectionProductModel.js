import mongoose from "mongoose";

const CollectionProductSchema = new mongoose.Schema({
productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true
},
collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collections",
    required: true
}
}, { timestamps: true })

const CollectionProductModel = mongoose.model("CollectionProductRelations", CollectionProductSchema)
export default CollectionProductModel;