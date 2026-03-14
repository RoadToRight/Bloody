"use client"
import { AppBar, Box, Button, List, ListItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import Megamenu from '../Megamenu';
import Link from 'next/link';
import Cart from './CartSidebar';

const Navbar = () => {

    const [CartOpen, setCartOpen] = useState(false);

    return (
        <>
            <Box sx={{ position: "relative" }}>
                <AppBar position='static' sx={{ bgcolor: "primary.dark" }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Link href={"/"}>
                            <img src="https://res.cloudinary.com/dyxmm2qpt/image/upload/v1772752965/Header_Logo_du2ofs.avif" alt="das" />
                        </Link>
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
                                <IoIosCart size={24} onClick={() => setCartOpen((prev) => !prev)} />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Megamenu />

            </Box>
            <Cart CartOpen={CartOpen} setCartOpen={setCartOpen} />
        </>
    )
}

export default Navbar
