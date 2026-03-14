"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme";
import React from "react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </Provider>
    );
}