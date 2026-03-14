import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders",
        required: true,
    },
    payment_intent_id: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const PaymentModel = mongoose.model("Payments", PaymentSchema);

export default PaymentModel;