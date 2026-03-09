import React from "react";
import {
    Box,
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    Divider,
    Select,
    MenuItem,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";

const Collections = () => {
    return (
        <Box
            sx={{
                bgcolor: "#000",
                color: "#fff",
                px: { xs: 2, md: 6 },
                py: 5,
            }}
        >
            <Box className={"container"} sx={{ display: "flex" }} spacing={4}>
                {/* LEFT FILTER SECTION */}
                <Grid item xs={12} md={3}>
                    {/* SWITCH */}
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>SWITCH</Typography>

                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Mecha-Like (3)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Mechanical (BLMS) (7)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Optical (AT) (4)" />

                        <Divider sx={{ borderColor: "red", mt: 2 }} />
                    </Box>

                    {/* LIGHTING */}
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>LIGHTING</Typography>

                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Neon (4)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="RGB (8)" />

                        <Divider sx={{ borderColor: "red", mt: 2 }} />
                    </Box>

                    {/* KEYS */}
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>KEYS</Typography>

                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="98-100 (5)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="104-113 (5)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="60-87 (TKL) (5)" />

                        <Divider sx={{ borderColor: "red", mt: 2 }} />
                    </Box>

                    {/* GHOST KEYS */}
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>GHOST KEYS</Typography>

                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Full N-Key Rollover (11)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Multi N-Key Rollover (4)" />

                        <Divider sx={{ borderColor: "red", mt: 2 }} />
                    </Box>

                    {/* AVAILABILITY */}
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 2 }}>AVAILABILITY</Typography>

                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="In Stock (12)" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Out Of Stock (3)" />

                        <Divider sx={{ borderColor: "red", mt: 2 }} />
                    </Box>
                </Grid>

                {/* RIGHT PRODUCTS SECTION */}
                <Grid item xs={12} md={9}>
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
                            defaultValue="higjh"
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
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Collections;