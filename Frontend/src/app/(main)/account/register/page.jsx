import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'

const page = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', py: 10, px: { xs: 2, md: 6 } }}>
            <Box sx={{ maxWidth: 520, mx: 'auto' }}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
                    Home &gt; Create Account
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    CREATE ACCOUNT
                </Typography>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
                    Please register below to create an account
                </Typography>

                <Box sx={{ display: 'grid', gap: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            First Name
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter your first name"
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    borderRadius: 4,
                                },
                            }}
                            InputLabelProps={{ style: { color: '#fff' } }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Last Name
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter your last name"
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    borderRadius: 4,
                                },
                            }}
                            InputLabelProps={{ style: { color: '#fff' } }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Your Email Address <span style={{ color: '#f44336' }}>*</span>
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter your email address"
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    borderRadius: 4,
                                },
                            }}
                            InputLabelProps={{ style: { color: '#fff' } }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Your Password <span style={{ color: '#f44336' }}>*</span>
                        </Typography>
                        <TextField
                            fullWidth
                            type="password"
                            placeholder="Create a password"
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    borderRadius: 4,
                                },
                            }}
                            InputLabelProps={{ style: { color: '#fff' } }}
                        />
                    </Box>

                    <FormControlLabel
                        control={<Checkbox sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />}
                        label={
                            <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>
                                Subscribe To Email Marketing
                            </Typography>
                        }
                        sx={{ mt: 1 }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#fff',
                            color: '#000',
                            fontWeight: 700,
                            py: 1.25,
                            textTransform: 'uppercase',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                        }}
                    >
                        CREATE AN ACCOUNT
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default page
