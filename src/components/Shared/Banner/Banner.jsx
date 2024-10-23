import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PinDropIcon from '@mui/icons-material/PinDrop';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button, Container, Divider, Typography } from '@mui/material';

const Banner = ({ textUp, textDown, }) => {
    return (
        <Box
            sx={{
                marginBottom: "160px",
                height: '70vh',
                borderRadius: "40px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url('/bannerBg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                '&::before': {
                    borderRadius: "40px",
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
                <Typography sx={{ fontSize: "70px", fontWeight: "700" }} gutterBottom>
                    {textUp} <br />
                    {textDown}
                </Typography>
                <Box sx={{ bgcolor: "white", color: "black", padding: "20px", borderRadius: "16px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }} gap={"10px"}>
                        <Box item xs={12} md={3}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <Typography sx={{ textAlign: "left", fontSize: "14px", color: "#0F172A99" }}>
                                    I’m looking to..
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
                                    <Typography>
                                        Buy apartments
                                    </Typography>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box item xs={12} md={3}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <Typography sx={{ textAlign: "left", fontSize: "14px", color: "#0F172A99" }}>
                                    Location
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
                                    <Typography>
                                        Toronto, Canada
                                    </Typography>
                                    <PinDropIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box item xs={12} md={3}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <Typography sx={{ textAlign: "left", fontSize: "14px", color: "#0F172A99" }}>
                                    Property Type
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
                                    <Typography>
                                        All Type
                                    </Typography>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box item xs={12} md={3}>
                            <Button sx={{ bgcolor: "black" }}>
                                <TuneIcon sx={{ color: "white" }} />
                            </Button>
                            <Button variant='contained' sx={{ bgcolor: "#F46A07", marginLeft: "10px" }}>
                                Search
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;

