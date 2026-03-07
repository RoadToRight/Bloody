import { Box } from '@mui/material'
import React from 'react'

const AnnouncementBar = () => {
    return (
        <Box sx={{ bgcolor: `primary.main`, textAlign: "center", padding: "8px 15px", fontSize: "12px" }}>
            <h4>GET 5% DISCOUNT ON CHECKOUT WITH CODE : BLOODY5</h4>
        </Box>
    )
}

export default AnnouncementBar
