import { Box, Grid, Typography } from "@mui/material";
import properties from "../../../assets/properties.json";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Crop54Icon from "@mui/icons-material/Crop54";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const RecentProperties = () => {
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
        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: "bold" }}
          >
            Recent Properties
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "13px" } }}>
            Check out some of our latest properties
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: { md: "top", xs: "center" },
            color: "white",
            backgroundColor: "black",
            padding: "8px 16px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
            See All Properties
          </Typography>
          <ArrowRightAltIcon />
        </Box>
      </Box>
      {/* cards */}
      <Box>
        <Grid container spacing={3}>
          {properties?.map((item, idx) => (
            <Grid item xs={12} sm={6} lg={4} key={idx}>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "16px",
                  minHeight: "230px",
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ maxWidth: 500, position: "relative" }}>
                  <img
                    src={item?.picture}
                    alt="3D House Model"
                    style={{
                      width: "100%",
                      height: "260px",
                      borderRadius: "15px",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      backgroundColor: "white",
                      padding: "4px 14px",
                      borderRadius: "30px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item?.tag}
                  </Typography>
                </Box>
                {/* name */}
                <Typography
                  sx={{
                    color: "#F46A07",
                    marginBottom: "",
                    fontSize: "24px",
                  }}
                >
                  {item?.name}
                </Typography>
                {/* address */}
                <Typography
                  sx={{
                    color: "#0F172A99",
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  {item?.address}
                </Typography>
                {/*area room bath */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Crop54Icon sx={{ color: "gray" }} />
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Typography>0{item.area}</Typography>
                      <Typography sx={{ color: "gray" }}>sq ft</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <BedroomParentIcon sx={{ color: "gray" }} />
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Typography>0{item.bedroomNumbers}</Typography>
                      <Typography sx={{ color: "gray" }}>Beds</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <BathtubIcon sx={{ color: "gray" }} />
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Typography>0{item.bathNumbers}</Typography>
                      <Typography sx={{ color: "gray" }}>Baths</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "40px",
                  }}
                >
                  <Typography sx={{ fontSize: "30px" }}>
                    {item?.price}
                  </Typography>
                  <Typography>
                    <ArrowOutwardIcon
                      sx={{
                        backgroundColor: "#F46A07",
                        color: "white",
                        fontSize: "70px",
                        padding: "5px",
                        height: "40px",
                        width: "40px",
                        borderRadius: "15px",
                      }}
                    />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentProperties;
