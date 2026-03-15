import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import {
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';

const CheckoutForm = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.9fr 1fr' },
                gap: '32px',
                padding: { xs: '24px', md: '40px 32px' },
                maxWidth: '1120px',
                margin: '0 auto',
                color: '#f5f5f5',
            }}
        >
            <Box>
                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '18px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                        Contact
                    </Typography>
                    <Typography sx={{ margin: '8px 0 0', opacity: 0.75, fontSize: '13px', lineHeight: 1.4 }}>
                        Already have an account? <a href="#" style={{ color: '#f5f5f5', textDecoration: 'underline' }}>Sign in</a>
                    </Typography>

                    <TextField
                        id="email"
                        type="email"
                        placeholder="Email"
                        fullWidth
                        sx={{
                            marginTop: '14px',
                            '& .MuiInputBase-root': {
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(0, 0, 0, 0.36)',
                                color: '#f5f5f5',
                                fontSize: '13px',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(245, 245, 245, 0.57)',
                            },
                        }}
                        InputLabelProps={{
                            sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' },
                        }}
                        label="Email"
                    />

                    <FormControlLabel
                        control={<Checkbox sx={{ marginTop: '3px' }} />}
                        label="Email me with news and offers"
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            marginTop: '14px',
                            fontSize: '13px',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '18px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                        Delivery
                    </Typography>

                    <FormControl fullWidth sx={{ marginTop: '14px' }}>
                        <InputLabel sx={{ fontSize: '12px', opacity: 0.75, marginBottom: '6px' }}>Country/Region</InputLabel>
                        <Select
                            defaultValue="pakistan"
                            sx={{
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(0, 0, 0, 0.36)',
                                color: '#f5f5f5',
                                fontSize: '13px',
                                '& .MuiSelect-icon': { color: '#f5f5f5' },
                            }}
                        >
                            <MenuItem value="pakistan">Pakistan</MenuItem>
                        </Select>
                    </FormControl>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            gap: '12px',
                            marginTop: '12px',
                        }}
                    >
                        <TextField
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            fullWidth
                            label="First name"
                            InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '42px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    background: 'rgba(0, 0, 0, 0.36)',
                                    color: '#f5f5f5',
                                    fontSize: '13px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'rgba(245, 245, 245, 0.57)',
                                },
                            }}
                        />
                        <TextField
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            fullWidth
                            label="Last name"
                            InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '42px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    background: 'rgba(0, 0, 0, 0.36)',
                                    color: '#f5f5f5',
                                    fontSize: '13px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'rgba(245, 245, 245, 0.57)',
                                },
                            }}
                        />
                    </Box>

                    <TextField
                        id="address"
                        type="text"
                        placeholder="Address"
                        fullWidth
                        label="Address"
                        sx={{
                            marginTop: '14px',
                            '& .MuiInputBase-root': {
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(0, 0, 0, 0.36)',
                                color: '#f5f5f5',
                                fontSize: '13px',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(245, 245, 245, 0.57)',
                            },
                        }}
                        InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                    />

                    <TextField
                        id="apt"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        fullWidth
                        label="Apartment, suite, etc. (optional)"
                        sx={{
                            marginTop: '14px',
                            '& .MuiInputBase-root': {
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(0, 0, 0, 0.36)',
                                color: '#f5f5f5',
                                fontSize: '13px',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(245, 245, 245, 0.57)',
                            },
                        }}
                        InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                    />

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            gap: '12px',
                            marginTop: '12px',
                        }}
                    >
                        <TextField
                            id="city"
                            type="text"
                            placeholder="City"
                            fullWidth
                            label="City"
                            InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '42px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    background: 'rgba(0, 0, 0, 0.36)',
                                    color: '#f5f5f5',
                                    fontSize: '13px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'rgba(245, 245, 245, 0.57)',
                                },
                            }}
                        />
                        <TextField
                            id="postal"
                            type="text"
                            placeholder="Postal code (optional)"
                            fullWidth
                            label="Postal code (optional)"
                            InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '42px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    background: 'rgba(0, 0, 0, 0.36)',
                                    color: '#f5f5f5',
                                    fontSize: '13px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: 'rgba(245, 245, 245, 0.57)',
                                },
                            }}
                        />
                    </Box>

                    <TextField
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        fullWidth
                        label="Phone"
                        sx={{
                            marginTop: '14px',
                            '& .MuiInputBase-root': {
                                height: '42px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(0, 0, 0, 0.36)',
                                color: '#f5f5f5',
                                fontSize: '13px',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'rgba(245, 245, 245, 0.57)',
                            },
                        }}
                        InputLabelProps={{ sx: { fontSize: '12px', opacity: 0.75, marginBottom: '6px' } }}
                    />

                    <FormControlLabel
                        control={<Checkbox sx={{ marginTop: '3px' }} />}
                        label="Save this information for next time"
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            marginTop: '14px',
                            fontSize: '13px',
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{ marginTop: '3px' }} />}
                        label="Text me with news and offers"
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            marginTop: '14px',
                            fontSize: '13px',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '18px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                        Shipping method
                    </Typography>
                    <FormControlLabel
                        control={<Radio defaultChecked sx={{ marginTop: '3px', '&.Mui-checked': { color: '#ffffff' } }} />}
                        label={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography>Standard</Typography>
                                <Typography>Rs 200.00</Typography>
                            </Box>
                        }
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            padding: '14px 14px 12px',
                            border: '1px solid rgba(255, 255, 255, 0.16)',
                            borderRadius: '10px',
                            marginTop: '12px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '18px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                        Payment
                    </Typography>
                    <Typography sx={{ margin: '8px 0 0', opacity: 0.75, fontSize: '13px', lineHeight: 1.4 }}>
                        All transactions are secure and encrypted.
                    </Typography>

                    <RadioGroup defaultValue="safepay">
                        <FormControlLabel
                            value="safepay"
                            control={<Radio sx={{ marginTop: '3px', '&.Mui-checked': { color: '#ffffff' } }} />}
                            label={
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '14px', fontWeight: 600 }}>
                                        <Typography>Safepay Checkout - pay with debit & credit cards</Typography>
                                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '12px', opacity: 0.85 }}>
                                            <FaCcVisa />
                                            <FaCcMastercard />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.4 }}>
                                        You'll be redirected to Safepay Checkout - pay with debit & credit cards to complete your purchase.
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '14px 14px 12px',
                                border: '1px solid rgba(255, 255, 255, 0.16)',
                                borderRadius: '10px',
                                marginTop: '12px',
                                cursor: 'pointer',
                            }}
                        />
                        <FormControlLabel
                            value="bank"
                            control={<Radio sx={{ marginTop: '3px', '&.Mui-checked': { color: '#ffffff' } }} />}
                            label="Bank Deposit"
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '14px 14px 12px',
                                border: '1px solid rgba(255, 255, 255, 0.16)',
                                borderRadius: '10px',
                                marginTop: '12px',
                                cursor: 'pointer',
                            }}
                        />
                    </RadioGroup>
                </Box>

                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '12px',
                        padding: '22px 20px',
                        marginBottom: '18px',
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                        Billing address
                    </Typography>

                    <RadioGroup defaultValue="same">
                        <FormControlLabel
                            value="same"
                            control={<Radio defaultChecked sx={{ marginTop: '3px', '&.Mui-checked': { color: '#ffffff' } }} />}
                            label="Same as shipping address"
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '14px 14px 12px',
                                border: '1px solid rgba(255, 255, 255, 0.16)',
                                borderRadius: '10px',
                                marginTop: '12px',
                                cursor: 'pointer',
                            }}
                        />
                        <FormControlLabel
                            value="different"
                            control={<Radio sx={{ marginTop: '3px', '&.Mui-checked': { color: '#ffffff' } }} />}
                            label="Use a different billing address"
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '14px 14px 12px',
                                border: '1px solid rgba(255, 255, 255, 0.16)',
                                borderRadius: '10px',
                                marginTop: '12px',
                                cursor: 'pointer',
                            }}
                        />
                    </RadioGroup>
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        marginTop: '16px',
                        padding: '14px 18px',
                        background: '#ffffff',
                        color: '#000',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontSize: '14px',
                        '&:hover': { background: '#f0f0f0' },
                    }}
                >
                    Pay now
                </Button>
            </Box>

            <Box
                sx={{
                    position: 'sticky',
                    top: '28px',
                    alignSelf: 'start',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '12px',
                    padding: '22px 20px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
                    <Box
                        sx={{
                            width: '72px',
                            height: '72px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src="/mouse.webp"
                            alt="R90 Ultra Dual Mode Wireless Gaming Mouse"
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.3 }}>
                            R90 Ultra Dual Mode Wireless Gaming Mouse
                        </Typography>
                        <Typography sx={{ fontSize: '12px', opacity: 0.7 }}>Black</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Rs 7,000.00</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
                    <TextField
                        placeholder="Discount code"
                        fullWidth
                        sx={{
                            '& .MuiInputBase-root': {
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                background: 'rgba(0, 0, 0, 0.36)',
                                padding: '10px 12px',
                                color: '#f5f5f5',
                                fontSize: '13px',
                            },
                        }}
                    />
                    <Button
                        sx={{
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#f5f5f5',
                            padding: '10px 14px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '13px',
                            '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
                        }}
                    >
                        Apply
                    </Button>
                </Box>

                <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.18)', paddingTop: '14px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '13px' }}>
                        <Typography>Subtotal</Typography>
                        <Typography>Rs 7,000.00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '13px' }}>
                        <Typography>Shipping</Typography>
                        <Typography>Rs 200.00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '15px', fontWeight: 700 }}>
                        <Typography fontWeight={700}>Total</Typography>
                        <Typography fontWeight={700}>Rs 7,200.00</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CheckoutForm;
