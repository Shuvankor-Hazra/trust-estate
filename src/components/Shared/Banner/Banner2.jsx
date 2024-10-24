import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Button, Container, Typography } from '@mui/material';

const Banner2 = ({ textUp, textDown }) => {
    return (
        <Box
            sx={{
                marginBottom: "120px",
                height: { xs: '450px', md: '600px' },
                borderRadius: "40px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url('/bannerBg2.png')`,
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
                <Button
                    variant='outlined'
                    color='white'
                    sx={{
                        borderRadius: "28px",
                        fontSize: { xs: "12px", md: "16px" },
                        padding: { xs: "5px 10px", md: "10px 20px" }
                    }}
                >
                    Looking for more?
                </Button>
                <Typography
                    sx={{
                        fontSize: { xs: "40px", md: "70px" },
                        fontWeight: "700",
                        marginY: { xs: 2, md: 4 }
                    }}
                    gutterBottom
                >
                    {textUp} <br />
                    {textDown}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 2 },
                        alignItems: "center"
                    }}>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{
                                bgcolor: "#F46A07",
                                fontSize: { xs: "16px", md: "18px" },
                                borderRadius: "10px",
                                textTransform: 'capitalize',
                                padding: { xs: "10px 15px", md: "10px 20px" }
                            }}
                        >
                            <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                                Get in Touch
                            </Typography>
                            <ArrowOutwardIcon sx={{ marginLeft: "10px" }} />
                        </Button>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{
                                bgcolor: "#ffffff",
                                color: "#F46A07",
                                fontSize: { xs: "16px", md: "18px" },
                                borderRadius: "10px",
                                marginLeft: { xs: 0, md: "10px" },
                                textTransform: 'capitalize',
                                padding: { xs: "10px 15px", md: "10px 20px" }
                            }}
                        >
                            <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                                Browse More
                            </Typography>
                            <ArrowOutwardIcon sx={{ marginLeft: "10px" }} />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner2;
