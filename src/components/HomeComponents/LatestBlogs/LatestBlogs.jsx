import { Box, Grid, Typography } from "@mui/material";
import blogs from "../../../assets/blogs.json";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const LatestBlogs = () => {
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
            Our Latest Blogs
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "13px" } }}>
            Check out some of our latest Blogs
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
            See All Blogs
          </Typography>
          <ArrowRightAltIcon />
        </Box>
      </Box>
      {/* cards */}
      <Box>
        <Grid container spacing={3}>
          {blogs?.map((item, idx) => (
            <Grid item xs={12} sm={6} lg={3} key={idx}>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "16px",
                  minHeight: "230px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  justifyContent: "center",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ maxWidth: 500, position: "relative" }}>
                  <img
                    src={item?.image}
                    alt="3D House Model"
                    style={{
                      width: "100%",
                      height: "200px",
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
                    {item?.category}
                  </Typography>
                </Box>
                {/* name */}
                <Typography
                  sx={{
                    marginBottom: "",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    margin: "20px 0",
                  }}
                >
                  {item?.title}
                </Typography>
                {/* description */}
                <Typography
                  sx={{
                    color: "#0F172A99",
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  {item?.description}
                </Typography>
                {/*date views */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    position: "absolute",
                    top: "38%",
                    left: 0,
                    right: 0,
                    margin: "0 30px",
                    backgroundColor: "white",
                    padding: "5px 10px",
                    borderRadius: "15px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <CalendarMonthIcon sx={{ color: "gray" }} />
                    <Box>
                      <Typography>0{item.date}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <RemoveRedEyeIcon sx={{ color: "gray" }} />
                    <Box>
                      <Typography>0{item.views}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}>Read More</Typography>
                  <Typography>
                    <ArrowOutwardIcon
                      sx={{
                        fontSize: "25px",
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

export default LatestBlogs;
