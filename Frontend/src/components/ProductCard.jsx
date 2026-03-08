import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
    return (
        <div className='product_card'>
            <Link href={"/"}>
                <img />
                <Box  className="product_name" sx={{ fontSize: "16px", ":hover": { color: "primary.main", textDecoration: "underline",textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis" } }}>Bloody R72 Pro Duo Dual Mode Wireless Gaming Mouse </Box>
            </Link>
            <div className="ratings">

            </div>
            <Box className="product_price" sx={{ fontSize: "14px", fontWeight: "600" }}>Rs.12,200.00</Box>
            <div className="variants">
                <div className="colors">

                </div>
            </div>
        </div>
    )
}

export default ProductCard
