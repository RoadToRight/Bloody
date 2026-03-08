import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    handle: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    }
}, { timestamps: true })

const collectionModel = mongoose.model("Collections", collectionSchema)
export default collectionModel;