import { Box, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BusinessIcon from "@mui/icons-material/Business";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FactoryIcon from "@mui/icons-material/Factory";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

const PopularCategories = () => {
  const categories = [
    {
      name: "Apartment",
      property: "1,563 Property",
      icon: <BusinessIcon sx={{ fontSize: 38 }} />,
    },
    {
      name: "House",
      property: "1,560 Property",
      icon: <HomeWorkIcon sx={{ fontSize: 38 }} />,
    },
    {
      name: "Industrial",
      property: "1,663 Property",
      icon: <FactoryIcon sx={{ fontSize: 38 }} />,
    },
    {
      name: "Office",
      property: "1,523 Property",
      icon: <EmojiTransportationIcon sx={{ fontSize: 38 }} />,
    },
    {
      name: "Shopping Mall",
      property: "1,863 Property",
      icon: <LocationCityIcon sx={{ fontSize: 38 }} />,
    },
    {
      name: "Farm House",
      property: "1,460 Property",
      icon: <OtherHousesIcon sx={{ fontSize: 38 }} />,
    },
  ];
  return (
    <Box sx={{ margin: "80px 10px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: "bold" }}
        >
          Popular Categories
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: { md: "top", xs: "center" },
            color: "#F46A07",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            View All Categories
          </Typography>

          <ArrowRightAltIcon />
        </Box>
      </Box>
      {/* cards */}
      <Box>
        <Grid container spacing={3}>
          {categories?.map((item, idx) => (
            <Grid sx={{}} item xs={6} sm={4} lg={2} key={idx}>
              <Box
                sx={{
                  padding: "20px 16px",
                  borderRadius: "16px",
                  minHeight: "230px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography sx={{ color: "#F46A07", marginBottom: "20px" }}>
                  {item?.icon}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  {item?.name}
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {item?.property}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularCategories;
