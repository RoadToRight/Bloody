"use client"
import React from "react";
import {
    Box,
    Grid,
    Typography,
    Select,
    MenuItem,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";
import FilterBox from "@/components/client/FilterBox";
const Collections = () => {

    const FiltersData = [
        {
            title: "SWITCH",
            options: ["Mecha-Like (3)", "Mechanical (BLMS) (7)", "Optical (AT) (4)"]
        },
        {
            title: "LIGHTING",
            options: ["Neon (4)", "RGB (8)"]
        },
        {
            title: "KEYS",
            options: ["98-100 (5)", "104-113 (5)", "60-87 (TKL) (5)"]
        },
        {
            title: "GHOST KEYS",
            options: ["Full N-Key Rollover (11)", "Multi N-Key Rollover (4)"]
        },
        {
            title: "AVAILABILITY",
            options: ["In Stock (12)", "Out Of Stock (3)"]
        },
    ]


    return (
        <Box
            sx={{
                bgcolor: "#000",
                color: "#fff",
                px: { xs: 2, md: 6 },
                py: 5,
            }}
        >
            <Grid container spacing={4} sx={{ display: "flex" }}>
                {/* LEFT FILTER SECTION */}

                <FilterBox FiltersData={FiltersData} />

                {/* RIGHT PRODUCTS SECTION */}
                <Grid size={{ xs: 12, md: 9 }}>
                    {/* SORT */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 4,
                            gap: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: 14 }}>SORT BY</Typography>

                        <Select
                            defaultValue="high"
                            size="small"
                            sx={{
                                bgcolor: "#111",
                                color: "#fff",
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "#444" },
                                "& .MuiSvgIcon-root": { color: "#fff" },
                            }}
                        >
                            <MenuItem value="high">Price, high to low</MenuItem>
                            <MenuItem value="low">Price, low to high</MenuItem>
                            <MenuItem value="new">Newest</MenuItem>
                        </Select>
                    </Box>

                    {/* PRODUCT GRID */}
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Collections;