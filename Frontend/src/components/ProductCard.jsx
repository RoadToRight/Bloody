import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Link href={"/"} passHref>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height:300,
            overflow: "hidden",
            cursor: "pointer",
            perspective: "1000px",
            "&:hover .hoverWrapper": {
              opacity: 1,
              transform: "scale(1)",
            },
            "&:hover .mainWrapper": {
              transform: "scale(0.95)",
              opacity: 0.7,
            },
          }}
        >
          {/* Main Image */}
          <Box
            className="mainWrapper"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "transform 0.8s ease, opacity 0.8s ease",
            }}
          >
            <Image
              src="/mouse.webp"
              alt="Mouse Front"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Hover Image */}
          <Box
            className="hoverWrapper"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              zIndex: 2,
              transform: "scale(1.2)",
              transition: "transform 0.8s ease, opacity 0.8s ease",
            }}
          >
            <Image
              src="/mouse (2).webp"
              alt="Mouse Hover"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Link>

      {/* Product Name */}
      <Box
        sx={{
          fontSize: "16px",
          mt: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "primary.main",
            textDecoration: "underline",
          },
        }}
      >
        Bloody R72 Pro Duo Dual Mode Wireless Gaming Mouse
      </Box>

      {/* Product Price */}
      <Box sx={{ fontSize: "14px", fontWeight: 600, mt: 0.5 }}>
        Rs.12,200.00
      </Box>
    </Box>
  )
}

export default ProductCard