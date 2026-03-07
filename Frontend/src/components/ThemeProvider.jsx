"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme";
import React from "react";

export default function Providers({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}