"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme";
import React from "react";
import { CssBaseline } from "@mui/material";

export default function Providers({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}