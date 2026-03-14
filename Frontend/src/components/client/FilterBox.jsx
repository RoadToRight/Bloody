"use client"
import { Box, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaMinus } from 'react-icons/fa6'

const FilterBox = ({ FiltersData }) => {

    const [activeAccordian, setactiveAccordian] = useState(Object.fromEntries(FiltersData.map((x, i) => ([i, true]))));


    const handleAccordian = (index) => {
        setactiveAccordian((prev) => ({
            ...prev, [index]: !prev[index]
        }))
    }

    return (
        <Grid size={{ xs: 12, md: 3 }}>
            {FiltersData.map((filter, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px", cursor: "pointer" }} onClick={() => handleAccordian(index)}>
                        <Typography sx={{ fontWeight: 700 }}>
                            {filter.title}
                        </Typography>
                        <FaMinus />

                    </Box>

                    {activeAccordian[index] && filter.options.map((option, i) => (
                        <FormControlLabel
                            key={i}
                            control={<Checkbox sx={{ color: "#fff" }} />}
                            label={option}
                        />
                    ))}

                    <Divider sx={{ borderColor: "red", mt: 2 }} />
                </Box>
            ))}
        </Grid>
    )
}

export default FilterBox
