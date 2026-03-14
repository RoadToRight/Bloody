import React from 'react'
import { Box, Container, Typography, List, ListItem, IconButton, Badge, Divider, Link, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import { FaFacebookF, FaInstagram, FaTiktok, FaRegCommentDots } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', borderTop: '2px solid #b71c1c', borderBottom: '2px solid #b71c1c' }}>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>QUICK LINKS</Typography>
                        <List disablePadding>
                            {['Mouse', 'Keyboard', 'Audio', 'Accessories'].map((t) => (
                                <ListItem key={t} sx={{ py: 0.5, pl: 0 }}>
                                    <Link href="#" underline="none" color="inherit" sx={{ fontSize: 14 }}>{t}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>POLICIES</Typography>
                        <List disablePadding>
                            {['Returns', 'Payment And Shipping', 'Warranty', 'Terms Of Service', 'Privacy Policy'].map((t) => (
                                <ListItem key={t} sx={{ py: 0.5, pl: 0 }}>
                                    <Link href="#" underline="none" color="inherit" sx={{ fontSize: 14 }}>{t}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>CONTACT US</Typography>
                        <Typography variant="body2">Contact</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, textAlign: { xs: 'left', md: 'right' } }}>KEEP IN TOUCH</Typography>
                        <Stack direction="row" spacing={1} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                            <IconButton aria-label="facebook" sx={{ border: '2px solid #b71c1c', color: '#fff' }}>
                                <FaFacebookF />
                            </IconButton>
                            <IconButton aria-label="instagram" sx={{ border: '2px solid #b71c1c', color: '#fff' }}>
                                <FaInstagram />
                            </IconButton>
                            <IconButton aria-label="tiktok" sx={{ border: '2px solid #b71c1c', color: '#fff' }}>
                                <FaTiktok />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ bgcolor: 'rgba(183,28,28,0.25)' }} />

            <Box sx={{ py: 2, textAlign: 'center' }}>
                <Typography variant="caption">© 2026 Bloody Gaming. All Rights Reserved. Powered By Tech Andaz</Typography>
            </Box>


        </Box>
    )
}

export default Footer
