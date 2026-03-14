'use client'

import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { IoMdClose } from 'react-icons/io'

const Cart = ({ CartOpen = true, setCartOpen }) => {
    if (!CartOpen) return null

    return (
        <Box
            component="div"
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 1300,
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(2px)',
                display: 'flex',
                justifyContent: 'flex-end',
            }}
            onClick={() => setCartOpen(false)}
        >
            <Box
                component="aside"
                sx={{
                    width: { xs: '100%', sm: 380 },
                    maxWidth: 420,
                    height: '100%',
                    backgroundColor: '#050505',
                    color: '#ffffff44',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3,
                        py: 2,
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    <Box>
                        <Typography variant="h6" component="h2" sx={{ letterSpacing: 0.5 }}>
                            Shopping Cart
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.5 }}>
                            0 items
                        </Typography>
                    </Box>

                    <Box
                        component="button"
                        type="button"
                        onClick={() => setCartOpen(false)}
                        aria-label="Close cart"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.9)',
                            cursor: 'pointer',
                            padding: 6,
                            borderRadius: 6,
                        }}
                    >
                        <IoMdClose size={24} />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        px: 3,
                        py: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#f44336',
                            letterSpacing: 0.5,
                            mb: 2,
                            fontWeight: 500,
                        }}
                    >
                        Your cart is empty
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={() => setCartOpen(false)}
                        sx={{
                            mt: 1,
                            backgroundColor: '#fff',
                            color: '#000',
                            textTransform: 'uppercase',
                            py: 1.25,
                            fontWeight: 700,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        Continue Shopping
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart
