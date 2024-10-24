import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Image from "next/image";
import Featured1 from "../../../../public/Featured1.png";
import Featured2 from "../../../../public/Featured2.png";
import Featured3 from "../../../../public/Featured3.png";
import Frame from "../../../../public/Frame.png";

const UniterState = [
    { name: "California", area: "1,696" },
    { name: "Texas", area: "8,596" },
    { name: "Florida", area: "6,758" },
    { name: "Ohio", area: "4,825" },
    { name: "Hawaii", area: "1,931" },
    { name: "Virginia", area: "2,774" },
    { name: "Alaska", area: "3,267" },
    { name: "Maine", area: "5,385" },
    { name: "Massachusetts", area: "1,565" },
    { name: "Arizona", area: "1,990" },
    { name: "New Jersey", area: "8,722" },
    { name: "Georgia", area: "5,425" },
    { name: "Washington", area: "7,362" },
    { name: "Colorado", area: "4,094" },
    { name: "Pennsylvania", area: "4,054" },
    { name: "North Carolina", area: "3,819" },
    { name: "Illinois", area: "5,914" },
    { name: "New York", area: "4,555" },
    { name: "Michigan", area: "9,714" },
    { name: "Indiana", area: "3,418" },
    { name: "Montana", area: "7,040" },
    { name: "Alabama", area: "2,420" },
    { name: "Tennessee", area: "4,144" },
    { name: "Utah", area: "8,897" },
    { name: "Maryland", area: "1,406" }
];


const FeaturedProperties = () => {
    return (
        <Box sx={{ margin: "80px 10px" }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                    flexDirection: { xs: 'column', md: 'row' },
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: "bold" }}
                    >
                        Featured Properties
                    </Typography>
                    <Typography sx={{ fontSize: { md: "18px", xs: "13px" } }}>
                        Exploring top featured properties
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        backgroundColor: "#F46A07",
                        padding: "8px 16px",
                        borderRadius: "15px",
                        cursor: "pointer",
                        marginTop: { xs: '10px', md: '0' },
                    }}
                >
                    <Typography sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500" }}>
                        See All Properties
                    </Typography>
                    <ArrowRightAltIcon />
                </Box>
            </Box>

            {/* Featured Properties Cards */}
            <Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(12, 1fr)',
                        },
                        gap: 3,
                        alignItems: 'center',
                    }}
                >
                    {/* Large Image */}
                    <Box sx={{ gridColumn: { xs: 'span 12', sm: 'span 8' }, display: 'flex', justifyContent: 'center', position: "relative" }}>
                        <Image
                            style={{ width: "100%", objectFit: "cover", borderRadius: "32px" }}
                            src={Featured1}
                            alt="Featured Image 1"
                            height={600}
                            width={300}
                        />
                        {/* Top Badge */}
                        <Button variant="outlined" sx={{ position: "absolute", borderRadius: "32px", bgcolor: "white", color: "black", textTransform: 'capitalize', fontWeight: "500", left: "32px", top: "32px" }}>
                            Featured
                        </Button>

                        {/* Banner */}
                        <Box
                            sx={{
                                position: "absolute",
                                bgcolor: "white",
                                padding: { xs: "20px", md: "32px" },
                                borderRadius: "20px",
                                bottom: { xs: "16px", md: "32px" },
                                left: { xs: "16px", md: "32px" },
                                right: { xs: "16px", md: "32px" },
                                boxShadow: 2
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                                    <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: "700" }}>
                                        Luxury Apartments on California
                                    </Typography>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                                        Mirpur 10, Stadium dhaka 1208
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: "10px",
                                        justifyContent: { xs: "center", md: "flex-start" },

                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: "1px solid gray",
                                            padding: "10px",
                                            borderRadius: "16px",
                                            textAlign: { xs: "center", md: "left" }
                                        }}
                                    >
                                        <Typography>Size</Typography>
                                        <Typography>1600 SQFT</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            border: "1px solid gray",
                                            padding: "10px",
                                            borderRadius: "16px",
                                            textAlign: { xs: "center", md: "left" }
                                        }}
                                    >
                                        <Typography>Room</Typography>
                                        <Typography>4 Bed</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            border: "1px solid gray",
                                            padding: { xs: "5px 10px", md: "10px 20px" },
                                            borderRadius: "16px",
                                            textAlign: { xs: "center", md: "left" }
                                        }}
                                    >
                                        <Typography>Parking</Typography>
                                        <Typography>2 Cars Size</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ bgcolor: "black", borderRadius: "10px" }}>
                                    <IconButton>
                                        <ArrowOutwardIcon sx={{ color: "white" }} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Smaller Images in a column */}
                    <Box sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ position: "relative" }}>
                            <Image
                                style={{ width: "100%", objectFit: "cover", borderRadius: "32px" }}
                                src={Featured2}
                                alt="Featured Image 2"
                                height={300}
                                width={300}
                            />
                            <Button variant="outlined" sx={{ position: "absolute", borderRadius: "32px", bgcolor: "white", color: "black", textTransform: 'capitalize', fontWeight: "500", left: "24px", top: "24px" }}>
                                Featured
                            </Button>


                            {/* Banner */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bgcolor: "white",
                                    padding: { xs: "12px", md: "24px" },
                                    borderRadius: "20px",
                                    bottom: { xs: "12px", md: "24px" },
                                    left: { xs: "12px", md: "24px" },
                                    right: { xs: "12px", md: "24px" },
                                    boxShadow: 2
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                                        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700" }}>
                                            Home in Merrick Way
                                        </Typography>
                                        <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                                            Mirpur 10, Stadium dhaka 1208
                                        </Typography>
                                    </Box>

                                    <Box sx={{ bgcolor: "black", borderRadius: "10px" }}>
                                        <IconButton>
                                            <ArrowOutwardIcon sx={{ color: "white" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ position: "relative" }}>
                            <Image
                                style={{ width: "100%", objectFit: "cover", borderRadius: "32px" }}
                                src={Featured3}
                                alt="Featured Image 3"
                                height={300}
                                width={300}
                            />
                            <Button variant="outlined" sx={{ position: "absolute", borderRadius: "32px", bgcolor: "white", color: "black", textTransform: 'capitalize', fontWeight: "500", left: "24px", top: "24px" }}>
                                Featured
                            </Button>

                            {/* Banner */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bgcolor: "white",
                                    padding: { xs: "12px", md: "24px" },
                                    borderRadius: "20px",
                                    bottom: { xs: "12px", md: "24px" },
                                    left: { xs: "12px", md: "24px" },
                                    right: { xs: "12px", md: "24px" },
                                    boxShadow: 2
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        flexDirection: { xs: "column", md: "row" },
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                                        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700" }}>
                                            Luxury Family House
                                        </Typography>
                                        <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                                            Mirpur 10, Stadium dhaka 1208
                                        </Typography>
                                    </Box>

                                    <Box sx={{ bgcolor: "black", borderRadius: "10px" }}>
                                        <IconButton>
                                            <ArrowOutwardIcon sx={{ color: "white" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* United States Section */}
            <Box
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    marginTop: "80px",
                    bgcolor: "#f3f3f4",
                    borderRadius: "40px",
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: "20px", md: "50px" },
                    padding: { xs: '40px 20px', md: '80px' },
                }}
            >
                {/* Left Side (US States Section) */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: { xs: 'auto', md: '500px' },
                        width: { xs: '100%', md: '50%' },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: '15px', marginBottom: "40px" }}>
                        <MyLocationIcon sx={{ fontSize: { xs: "24px", md: "36px" } }} />
                        <Typography sx={{ fontSize: { xs: "24px", md: "36px" } }}>
                            United States
                        </Typography>
                    </Box>

                    {/* US States Grid */}
                    <Box sx={{ display: "flex", gap: "10px", flexWrap: 'wrap' }}>
                        {UniterState.map((data, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    gap: "12px",
                                    bgcolor: "#ffffff",
                                    borderRadius: "15px",
                                    padding: { xs: "6px 10px", md: "8px 12px" },
                                    fontSize: { xs: "12px", md: "16px" },
                                }}
                            >
                                <Typography>{data.name}</Typography>
                                <Typography>{data.area}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right-side Image */}
                <Box
                    sx={{
                        height: { xs: '300px', md: '500px' },
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: { xs: '20px', md: '0px' },
                    }}
                >
                    <Image
                        src={Frame}
                        alt="Frame"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>
            </Box>




        </Box >
    );
};

export default FeaturedProperties;
