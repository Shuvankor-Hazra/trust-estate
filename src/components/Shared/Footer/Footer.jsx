import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import XIcon from '@mui/icons-material/X';
import { Divider, FormControl, IconButton, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Logo from "../../../../public/Logo (1).png"

const Legal = [
    {
        name: "Terms of Use",
        link: "/#"
    },
    {
        name: "Privacy Policy",
        link: "/#"
    },
    {
        name: "Cookie Policy",
        link: "/#"
    },
    {
        name: "Cookie Preferences",
        link: "/#"
    },
    {
        name: "FAQs",
        link: "/#"
    },
]
const TopCity = [
    {
        name: "Dhaka",
        link: "/#"
    },
    {
        name: "Chattagram",
        link: "/#chattagram"
    },
    {
        name: "Sylhet",
        link: "/#sylhet"
    },
    {
        name: "Khulna",
        link: "/#khulna"
    },
    {
        name: "Rajshahi",
        link: "/#rajshahi"
    },
]
const Company = [
    {
        name: "Home",
        link: "/#"
    },
    {
        name: "Property",
        link: "/#property"
    },
    {
        name: "Gallery",
        link: "/#gallery"
    },
    {
        name: "Blog",
        link: "/#blog"
    },
    {
        name: "Contact",
        link: "/#contact"
    },
]

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: "#0F172A20", padding: "40px 0" }}>
                {/* Footer top */}
                <Grid container sx={{ maxWidth: "1280px", margin: "0 auto" }}>
                    {/* First col */}
                    <Grid xs={12} lg={3}>
                        <Box sx={{ padding: "20px" }}>
                            {/* <img src={`${process.env.PUBLIC_URL}../../Logo (1).png`} alt="Logo" /> */}
                            <Image src={Logo} alt='Logo' />
                            <Typography sx={{ marginTop: "15px" }}>
                                4140 Parker Rd. Allentown,
                            </Typography>
                            <Typography sx={{ marginBottom: "15px" }}>
                                New Mexico 31134
                            </Typography>
                            <Divider orientation="horizontal" />
                            <Typography sx={{ marginTop: "15px" }}>
                                Email: info@jstemplate.net,
                            </Typography>
                            <Typography sx={{ marginBottom: "15px" }}>
                                Phone: +880 123 456 789
                            </Typography>
                            <Divider orientation="horizontal" />
                            <Box sx={{ margin: "15px 0", display: "flex", alignItems: "center", gap: "10px" }}>
                                <IconButton >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton >
                                    <XIcon />
                                </IconButton>
                                <IconButton >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    {/* Second col */}
                    <Grid xs={12} lg={6}>
                        <Box sx={{ padding: "20px" }}>
                            <Grid container>
                                <Grid xs={6} md={4}>
                                    <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                                        Company
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
                                        {Company.map((data, idx) => (
                                            <Box sx={{ color: "#0F172A99" }} key={idx}>{data.name}</Box>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid xs={6} md={4}>
                                    <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                                        Top City
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
                                        {TopCity.map((data, idx) => (
                                            <Box sx={{ color: "#0F172A99" }} key={idx}>{data.name}</Box>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid xs={6} md={4}>
                                    <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                                        Legal
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
                                        {Legal.map((data, idx) => (
                                            <Box sx={{ color: "#0F172A99" }} key={idx}>{data.name}</Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {/* Third col */}
                    <Grid xs={12} lg={3}>
                        <Box sx={{ padding: "10px 5px" }}>
                            <Typography sx={{ fontSize: "26px", fontWeight: "500" }}>
                                Subscribe Our Newsletter
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                Get instant news by subscribe to our newsletter
                            </Typography>
                            <Box sx={{ marginTop: "32px" }}>
                                <FormControl variant="standard" fullWidth sx={{ bgcolor: "white" }}>
                                    <TextField id="outlined-basic" label="Email Subscription" variant="outlined" />
                                    <IconButton sx={{ position: "absolute", right: "5px", top: "8px", bgcolor: "#F46A07", borderRadius: "10px", color: "white" }}>
                                        <NorthEastIcon />
                                    </IconButton>
                                </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider orientation="horizontal" />
                {/* Footer bottom */}
                <Box sx={{ textAlign: "center", marginTop: "40px" }}>
                    <Typography>
                        © JS Template 2024. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;