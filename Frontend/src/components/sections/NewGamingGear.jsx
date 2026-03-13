"use client"
import React from 'react'
import ProductCard from '../ProductCard'
import { Box, Chip, Divider, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const NewGamingGear = () => {
    return (
        <Box sx={{ padding: "0px 20px" }}>
            <Typography variant='h3'>New Gaming Gear</Typography>
            <Box sx={{ display: "flex" }} className="collections_tab" >
                <Box sx={{ padding: "6px 15px" }}><Box sx={{ borderRadius: "0px", paddingRight: "10px" }}>Mouse</Box></Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2, background: "Red" }} />
                <Box sx={{ padding: "6px 15px" }}><Box sx={{ borderRadius: "0px", paddingRight: "10px" }}>Keyboard</Box></Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2, background: "Red" }} />
                <Box sx={{ padding: "6px 15px" }}><Box sx={{ borderRadius: "0px", paddingRight: "10px" }}>Headphone</Box></Box>
            </Box>
            <Swiper spaceBetween={20} className="products_wrapper" modules={[Pagination]} pagination={{ clickable: true }}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    767: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 }
                }}
            >
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
                <SwiperSlide><ProductCard /></SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default NewGamingGear
