import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default:0
    },
    comment:{
        type:String,
        trim:true,
        required:true
    }
}, { timestamps: true });

const ReviewModel = mongoose.model("Reviews", ReviewSchema);

export default ReviewModel;