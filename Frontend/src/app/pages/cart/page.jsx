import React from 'react'
import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material'
import { IoAdd, IoRemove, IoClose } from 'react-icons/io5'

const page = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', py: 6, px: { xs: 2, md: 6 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, mb: 4 }}>
                YOUR CART
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: 1, overflow: 'hidden' }}>
                        <Box sx={{ display: 'flex', px: 3, py: 2, bgcolor: 'rgba(255,255,255,0.04)', alignItems: 'center' }}>
                            <Typography sx={{ flex: 1, fontWeight: 700, letterSpacing: 1, fontSize: 12 }}>
                                PRODUCT
                            </Typography>
                            <Typography sx={{ width: 120, textAlign: 'center', fontWeight: 700, letterSpacing: 1, fontSize: 12 }}>
                                PRICE
                            </Typography>
                            <Typography sx={{ width: 120, textAlign: 'center', fontWeight: 700, letterSpacing: 1, fontSize: 12 }}>
                                QUANTITY
                            </Typography>
                            <Typography sx={{ width: 120, textAlign: 'center', fontWeight: 700, letterSpacing: 1, fontSize: 12 }}>
                                TOTAL
                            </Typography>
                        </Box>

                        <TableContainer component={Paper} elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead sx={{ display: 'none' }}>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                                        <TableCell sx={{ borderBottom: 'none', py: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box
                                                    component="img"
                                                    src="https://res.cloudinary.com/dyxmm2qpt/image/upload/v1772752965/Header_Logo_du2ofs.avif"
                                                    alt="Product"
                                                    sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, border: '1px solid rgba(255,255,255,0.15)' }}
                                                />
                                                <Box>
                                                    <Typography sx={{ fontWeight: 600 }}>R36 Ultra Dual Mode Wireless Gaming</Typography>
                                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.25 }}>
                                                        Mouse
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mt: 0.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        Black
                                                        <Box component="span" sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#000', border: '1px solid rgba(255,255,255,0.3)' }} />
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: 'none', width: 120, textAlign: 'center' }}>
                                            <Typography sx={{ fontWeight: 600 }}>Rs.7,000.00</Typography>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: 'none', width: 120, textAlign: 'center' }}>
                                            <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 1, bgcolor: 'rgba(255,255,255,0.06)' }}>
                                                <IconButton size="small" sx={{ color: '#fff', p: 0.5 }}>
                                                    <IoRemove />
                                                </IconButton>
                                                <Box sx={{ px: 2, color: '#fff', fontWeight: 700 }}>1</Box>
                                                <IconButton size="small" sx={{ color: '#fff', p: 0.5 }}>
                                                    <IoAdd />
                                                </IconButton>
                                            </Box>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: 'none', width: 120, textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                                <Typography sx={{ fontWeight: 600 }}>Rs.7,000.00</Typography>
                                                <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.65)' }}>
                                                    <IoClose />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography sx={{ fontWeight: 700, mb: 1 }}>Additional Comments</Typography>
                        <TextField
                            fullWidth
                            multiline
                            minRows={4}
                            placeholder="Special instruction for seller..."
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                borderRadius: 1,
                                input: { color: '#fff' },
                                textarea: { color: '#fff' },
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: 1, p: 3 }}>
                        <Typography sx={{ fontWeight: 700, letterSpacing: 1, mb: 2 }}>ORDER SUMMARY</Typography>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.18)', mb: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Subtotal</Typography>
                            <Typography sx={{ fontWeight: 700 }}>Rs.7,000.00</Typography>
                        </Box>

                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>Coupon Code</Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter Coupon Code"
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                borderRadius: 1,
                                input: { color: '#fff' },
                                '& .MuiInputBase-root': { color: '#fff' },
                            }}
                        />
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mt: 1, display: 'block' }}>
                            Coupon code will be applied on the checkout page
                        </Typography>

                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.18)', my: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Typography sx={{ fontWeight: 700 }}>TOTAL:</Typography>
                            <Typography sx={{ fontWeight: 700 }}>Rs.7,000.00</Typography>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                fontWeight: 700,
                                py: 1.25,
                                mb: 2,
                                '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                            }}
                        >
                            PROCEED TO CHECKOUT
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                color: '#fff',
                                fontWeight: 700,
                                py: 1.25,
                                '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' },
                            }}
                        >
                            CONTINUE SHOPPING
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default page
