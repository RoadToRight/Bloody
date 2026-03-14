import { createSlice } from "@reduxjs/toolkit";



const CartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCartIncrement: (state, action) => {

        },
        decrement: (state, action) => {

        },
        removeFromCart: (state, action) => {

        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    }
})

export const { addToCartIncrement, decrement, removeFromCart, clearCart } = CartReducer.actions;
export default CartReducer.reducer;