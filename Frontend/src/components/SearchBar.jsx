import React from "react";
import { Box, Typography, TextField, Chip, Grid, IconButton } from "@mui/material";
import { FiSearch, FiX } from "react-icons/fi";
import ProductCard from "./ProductCard";

const SearchBar = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.85)",
                zIndex: 1300,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                pt: "80px",
            }}
        >
            <Box
                sx={{
                    width: "1100px",
                    bgcolor: "#000",
                    color: "#fff",
                    p: 4,
                }}
            >
                {/* Search Input */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid #444",
                        pb: 2,
                        gap: 2,
                    }}
                >
                    <FiSearch size={20} color="#888" />

                    <TextField
                        variant="standard"
                        placeholder="Search products..."
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            sx: {
                                color: "#fff",
                                fontSize: "18px",
                            },
                        }}
                    />

                    <IconButton sx={{ color: "#fff" }}>
                        <FiX size={22} />
                    </IconButton>
                </Box>

                {/* Trending */}
                <Box sx={{ mt: 4 }}>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#aaa",
                            mb: 2,
                            letterSpacing: "1px",
                        }}
                    >
                        TRENDING NOW
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                        <Chip label="a60 gaming mouse" sx={chipStyle} />
                        <Chip label="s510n keyboard" sx={chipStyle} />
                        <Chip label="es9 plus" sx={chipStyle} />
                        <Chip label="q90 gaming mouse" sx={chipStyle} />
                    </Box>
                </Box>

                {/* Popular Products */}
                <Box sx={{ mt: 6 }}>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#aaa",
                            mb: 3,
                            letterSpacing: "1px",
                        }}
                    >
                        POPULAR PRODUCTS
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

const chipStyle = {
    bgcolor: "#111",
    color: "#ddd",
    borderRadius: "4px",
    px: 1,
    "&:hover": {
        bgcolor: "#222",
    },
};

export default SearchBar;