import React from 'react'
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { FaFacebookF, FaTwitter, FaPinterestP, FaTumblr, FaWhatsapp } from 'react-icons/fa'
import Accordian from '@/components/client/Accordian'

const Page = () => {
    return (
        <Box
            className="container"
            sx={{
                display: 'flex',
                bgcolor: 'black',
                color: 'white',
                px: 4,
                py: 3,
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Left side images */}
            <Box sx={{ mr: 4, display: 'flex', flexDirection: 'column', gap: 4, width: "50%" }}>
                {/* Main image */}
                <Box
                    component="img"
                    src="/mouse.webp"
                    alt="Gaming Headset"
                    sx={{ width: "100%", objectFit: 'contain', borderRadius: 1 }}
                />
                {/* Top view image */}
                <Box
                    component="img"
                    src="/mouse (2).webp"
                    alt="Gaming Headset Top"
                    sx={{ width: "100%", objectFit: 'contain', alignSelf: 'center' }}
                />
            </Box>

            {/* Right side details */}
            <Box sx={{ flex: 1, width: "50%" }}>
                {/* Title */}
                <Typography variant="h1" sx={{ color: 'red', fontWeight: 'bold', fontSize: "20px" }}>
                    G565 Virtual 7.1 Surround Sound RGB Gaming Headset
                </Typography>
                {/* Rating stars and reviews */}
                <Typography sx={{ mt: 0.5, color: 'orange', fontWeight: 'bold' }}>
                    🔥🔥🔥🔥🔥 2 Reviews
                </Typography>
                {/* Price */}
                <Typography sx={{ mt: 1, fontWeight: 'bold', fontSize: 22 }}>Rs.5,800.00</Typography>
                {/* Color selection */}
                <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Color: Energy Black</Typography>
                <RadioGroup row defaultValue="energy-black" sx={{ mt: 0.5 }}>
                    <FormControlLabel
                        value="energy-black"
                        control={<Radio sx={{ color: 'red' }} />}
                        label=""
                        sx={{ mr: 2 }}
                    />
                    <FormControlLabel
                        value="energy-white"
                        control={<Radio sx={{ color: 'red' }} />}
                        label=""
                    />
                </RadioGroup>
                {/* Add to cart button */}
                <Button variant="contained" sx={{ mt: 2, bgcolor: 'black', color: 'white', border: '1px solid white', width: '100%' }}>
                    ADD TO CART
                </Button>

                {/* Product Details */}
                <Box sx={{ mt: 3, borderTop: '1px solid red', pt: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Product Details</Typography>
                    <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'disc' }}>
                        <li>7.1 Virtual Surround Sound</li>
                        <li>RGB Flow Backlight</li>
                        <li>Light-Weight Flying Wing Headband</li>
                        <li>3D Memory Foam Protein Leather Earpads</li>
                        <li>High-Precision 50 mm Speaker Unit</li>
                        <li>Noise-Canceling Control (Directional Mic)</li>
                        <li>In-Line Controller</li>
                        <li>USB Port</li>
                    </ul>
                </Box>

                {/* Specifications */}
                {/* <Box sx={{ mt: 3, borderTop: '1px solid red', pt: 2 }}>
          <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Specification</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            Headset
          </Typography>
          <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'disc' }}>
            <li>Speaker Unit: 50 mm</li>
            <li>Frequency Response: 20 Hz – 20 kHz</li>
            <li>Sensitivity: 115 dB</li>
            <li>Impedance: 16 ohm</li>
            <li>Microphone</li>
            <li>Frequency Response: 100 Hz – 10 kHz</li>
            <li>Sensitivity: -42 dB</li>
            <li>Cable</li>
            <li>Cable Length: 200 cm</li>
            <li>Port: USB Plug</li>
          </ul>
        </Box> */}
                <Accordian />

                {/* Social icons */}
                <Box sx={{ mt: 4, display: 'flex', gap: 2, color: 'white', fontSize: 22 }}>
                    <FaFacebookF style={{ cursor: 'pointer' }} />
                    <FaTwitter style={{ cursor: 'pointer' }} />
                    <FaPinterestP style={{ cursor: 'pointer' }} />
                    <FaTumblr style={{ cursor: 'pointer' }} />
                    <FaWhatsapp style={{ cursor: 'pointer' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Page