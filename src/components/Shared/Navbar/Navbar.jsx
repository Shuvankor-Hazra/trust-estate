"use client"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, Divider, IconButton, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from "../../../../public/Logo (1).png";
import DrawerComponent from './DrawerComponent';

const Pages = ["Home", "Property", "Blog", "Page", "Contact"];
const Routes = ["/", "/property", "/blog", "/page", "/contact"];

const Navbar = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    const [darkMode, setDarkMode] = useState(false);

    // Dark / light mode
    const handleToggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <AppBar style={{ background: "#ffffff", color: "black", boxShadow: "none", padding: "32px 0" }} position='sticky'>
                <Toolbar>
                    <Link href={"/#"}>
                        <Image src={Logo} alt='Logo' width={193} height={48} />
                    </Link>
                    {
                        isMatch ? (
                            <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                                <IconButton >
                                    <SearchIcon />
                                </IconButton>
                                <IconButton onClick={handleToggleMode} >
                                    {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                                </IconButton>
                                <DrawerComponent />
                            </Box>
                        ) : (
                            <>
                                <Divider orientation="vertical" variant='middle' flexItem sx={{ paddingX: "20px" }} />
                                <Tabs
                                    onChange={(e, value) => setValue(value)}
                                    value={value}
                                    sx={{ marginLeft: "20px", }}
                                    textColor="inherit"
                                    indicatorColor="secondary"
                                >
                                    {Pages.map((page, idx) => (
                                        <Tab
                                            key={idx}
                                            component={Link}
                                            href={Routes[idx]}
                                            label={page}
                                            sx={{ textDecoration: 'none', fontSize: "18px", fontWeight: "500", }}
                                        />
                                    ))}
                                </Tabs>
                                <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                                    <IconButton >
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton onClick={handleToggleMode} >
                                        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                                    </IconButton>
                                    <Button variant='outlined' size='large' sx={{ color: "black", borderColor: "black" }}>Login</Button>
                                    <Button variant='contained' size='large' sx={{ bgcolor: "#F46A07" }}>Sign up</Button>
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
