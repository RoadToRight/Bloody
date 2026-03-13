import { AppBar, Box, Button, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import Megamenu from '../Megamenu';

const Navbar = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <AppBar position='static' sx={{ bgcolor: "primary.dark" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <img src="https://res.cloudinary.com/dyxmm2qpt/image/upload/v1772752965/Header_Logo_du2ofs.avif" alt="" />
                    <Box>
                        <List sx={{ display: "flex" }}>
                            <ListItem>Mouse</ListItem>
                            <ListItem>Keyboard</ListItem>
                            <ListItem>Audio</ListItem>
                            <ListItem>Accessories</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                            <Typography>Sign</Typography>
                            <IoSearchOutline size={26} />
                            <IoIosCart size={24} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Megamenu />

        </Box>
    )
}

export default Navbar
