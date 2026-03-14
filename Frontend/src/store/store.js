const { configureStore } = require("@reduxjs/toolkit");
import CartReducer from "./slices/cart"

const store = configureStore({
    reducer: {
        cart:CartReducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware().concat()
    // }
})

export default store;