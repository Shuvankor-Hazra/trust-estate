import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PinDropIcon from '@mui/icons-material/PinDrop';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button, Container, Divider, Typography } from '@mui/material';

const FilterOption = ({ label, value, icon }) => (
    <Box>
        <Typography sx={{ textAlign: "left", fontSize: { xs: "12px", md: "14px" }, color: "#0F172A99", marginBottom: "8px" }}>
            {label}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "20px", md: "40px" } }}>
            <Typography>{value}</Typography>
            {icon}
        </Box>
    </Box>
);

const Banner = ({ textUp, textDown }) => {
    return (
        <Box
            sx={{
                marginBottom: "120px",
                height: { xs: '500px', md: '650px' },
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
                    backgroundColor: '#0F172AB2',
                    zIndex: 1,
                }
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
                <Typography
                    sx={{
                        fontSize: { xs: "40px", md: "70px" },
                        fontWeight: "700"
                    }}
                    gutterBottom
                >
                    {textUp} <br />
                    {textDown}
                </Typography>

                {/* Filter section */}
                <Box
                    sx={{
                        bgcolor: "white",
                        color: "black",
                        padding: { xs: "10px", md: "20px" },
                        borderRadius: "16px",
                        marginTop: { xs: '20px', md: '30px' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: "center" },
                        justifyContent: { xs: "center", md: "space-between" },
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "block", md: "flex" },
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "space-around" },
                            gap: { xs: "10px", md: "10px" }
                        }}
                    >
                        <FilterOption
                            label="I’m looking to.."
                            value="Buy Apartments"
                            icon={<KeyboardArrowDownIcon />}
                        />
                        <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
                        <FilterOption
                            label="Location"
                            value="Toronto, Canada"
                            icon={<PinDropIcon />}
                        />
                        <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
                        <FilterOption
                            label="Property Type"
                            value="All Type"
                            icon={<KeyboardArrowDownIcon />}
                        />
                        <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />

                        {/* Search Buttons */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                marginTop: { xs: "10px", md: "0" },
                                gap: '10px'
                            }}
                        >
                            <Button sx={{ bgcolor: "black" }}>
                                <TuneIcon sx={{ color: "white" }} />
                            </Button>
                            <Button variant='contained' sx={{ bgcolor: "#F46A07", marginLeft: { md: "10px" } }}>
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
