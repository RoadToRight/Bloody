"use client"
import React from 'react'
import ProductCard from '../ProductCard'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const FeaturedProducts = () => {
    return (
        <Box sx={{padding:"0px 20px"}}>
            <Typography variant='h3'>Featured Products</Typography>
            <Swiper spaceBetween={20}  className="products_wrapper" modules={[Pagination]} pagination={{ clickable: true }}
            breakpoints={{
                600:{slidesPerView:2},
                767:{slidesPerView:3},
                1024:{slidesPerView:3},
                1300:{slidesPerView:4}
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

export default FeaturedProducts
