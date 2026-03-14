import mongoose from "mongoose";
import validator from "validator";

const OrdersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            minlength: [3, "Name must contain at least 3 characters"],
            required: [true, "Name is required"],
        },

        email: {
            type: String,
            trim: true,
            required: [true, "Email is required"],
            validate: [validator.isEmail, "Please provide a valid email"],
        },

        phone: {
            type: String,
            required: [true, "Phone number is required"],
            match: [/^\d{11}$/, "Phone number must contain exactly 11 digits"],
        },

        country: {
            type: String,
            required: [true, "Country is required"],
            trim: true,
        },

        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
        },
        products: [
            {
                productId: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
                url: {
                    type: String,
                    trim: true,
                    validate: [validator.isURL, "Please provide a valid URL"]
                }
            }
        ],
        orderStatus: {
            type: String,
            required: [true, "Order status is required"],
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            default: "pending",
        },

        paid_at: {
            type: Date,
            required: [true, "Payment date is required"],
        },

        total_amount: {
            type: Number,
            required: [true, "Total amount is required"],
            min: [0, "Amount cannot be negative"],
        },
    },
    { timestamps: true }
);

const OrdersModel = mongoose.model("Orders", OrdersSchema);

export default OrdersModel;