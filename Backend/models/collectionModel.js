import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        url: { type: String },
        public_id: { type: String }
    },
    handle: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        index: true
    }
}, { timestamps: true })

const collectionModel = mongoose.model("Collections", collectionSchema)
export default collectionModel;