import mongoose from "mongoose";
import validator from "validator";

const OrdersSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: [3, "Name must contain at least 3 characters"],
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
        trim: true,
        required: [true, "Email is required"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{11}$/, "Phone number must contain exactly 11 digits"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must contain at least 8 characters"],
        select: false
    },
    role: {
        type: String,
        default: "user",
        enum: ["admin", "user"]
    },
    reset_password_token: {
        type: String
    },
    reset_password_expire: {
        type: Date,
    }
}, { timestamps: true });

const OrdersModel = mongoose.model("Users", OrdersSchema);

export default OrdersModel;