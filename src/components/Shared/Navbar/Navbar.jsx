"use client"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import DrawerComponent from './DrawerComponent';

const Pages = ["Home", "Property", "Blog", "Page", "Contact"]

const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

    return (
        <>
            <AppBar style={{ background: "#ffffff", boxShadow: "none", padding: "10px 0" }} position='sticky'>
                <Toolbar>
                    <img src={`${process.env.PUBLIC_URL}../..//Logo (1).png`} alt="Logo" />
                    {
                        isMatch ? (
                            <>
                                <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                                    <IconButton >
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton >
                                        <DarkModeIcon />
                                    </IconButton>
                                    <DrawerComponent />
                                </Box>
                            </>
                        ) : (
                            <>
                                <Tabs onChange={(e, value) => setValue(value)}
                                    value={value}
                                    sx={{ marginLeft: "40px", color: "black" }}
                                    textColor="inherit"
                                    indicatorColor="secondary">
                                    {
                                        Pages.map((page, idx) => (
                                            <Tab key={idx} label={page} />
                                        ))
                                    }
                                </Tabs>
                                <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                                    <IconButton >
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton >
                                        <DarkModeIcon />
                                    </IconButton>
                                    <Button variant='outlined' sx={{ color: "black", borderColor: "black" }}>Login</Button>
                                    <Button variant='contained' sx={{ bgcolor: "#F46A07" }}>Sign up</Button>
                                </Box>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
