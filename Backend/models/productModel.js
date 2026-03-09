import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    public_id: String,
    url: String
})

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    images: [ImageSchema],
    price: {
        type: Number,
        required: true
    },
    variants: {
        type: Map,
        of: [String]
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    productDetails: {
        type: String,
        trim: true,
        required: true
    },
    specifications: {
        type: String,
        trim: true,
        required: true
    },
    socialLinks: {
        type: Map,
        of: String,
        default: {}
    },
    tags: {
        type: [String],
        default: []
    },
    properties: {
        type: Map,
        of: String,
        default:{}
    },
    software: {
        type: String,
        trim: true,
        required: true
    },
    handle: {
        type: String,
        trim: true,
        unique: true,
        index: true,
        required: true
    }
}, { timestamps: true })

const ProductModel = mongoose.model("Products", ProductSchema)
export default ProductModel;