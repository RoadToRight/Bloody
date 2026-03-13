import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Megamenu = () => {

    const MegaData = [
        {
            title: ""
        }
    ]

    return (
        <Box sx={{ bgcolor: "primary.dark", width: "100%" }}>

            <Box className="mega_box" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{
                    '&:hover': {
                        color: 'primary.main',
                        cursor: 'pointer'
                    }, transition: "all 0.3s ease",
                }}>Wired Mouse</Typography>
                <Image src="/mouse.webp" width={500} height={300} style={{ objectFit: "contain" }} />
            </Box>
        </Box >
    )
}

export default Megamenu
