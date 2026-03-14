import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
        required: true,
    },
    payment_intend_id: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const PaymentModel = mongoose.model("Users", PaymentSchema);

export default PaymentModel;