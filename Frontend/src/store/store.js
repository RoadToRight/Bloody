const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {

    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware().concat()
    // }
})

export default store;