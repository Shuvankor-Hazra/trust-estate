import { Box, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image1 from "../../../assets/images/clientOne.png";
import image2 from "../../../assets/images/clientTwo.png";
import image3 from "../../../assets/images/clientThree.png";
import image4 from "../../../assets/images/clientFoue.png";
import Image from "next/image";

const OurAgents = () => {
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
            Our Agents
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "13px" } }}>
            Meet with some of our latest Agents
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
            Meet All Agents
          </Typography>
          <ArrowRightAltIcon />
        </Box>
      </Box>

      {/* cards */}
      <Box>
        <Grid container spacing={3}>
          {/* card 1 */}
          <Grid sx={{}} item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                borderRadius: "16px",
              }}
            >
              <Image
                src={image1}
                alt=""
                height={280}
                width="auto"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <Box sx={{ padding: "0 10px" }}>
                <Typography sx={{ fontSize: "24px" }}>James Bergson</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Property Analyst
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* card 2 */}
          <Grid sx={{}} item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                borderRadius: "16px",
              }}
            >
              <Image
                src={image2}
                alt=""
                height={280}
                width="auto"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <Box sx={{ padding: "0 10px" }}>
                <Typography sx={{ fontSize: "24px" }}>
                  Makena Philips
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Property Analyst
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* card 3 */}
          <Grid sx={{}} item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                borderRadius: "16px",
              }}
            >
              <Image
                src={image3}
                alt=""
                height={280}
                width="auto"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <Box sx={{ padding: "0 10px" }}>
                <Typography sx={{ fontSize: "24px" }}>
                  Alfredo Workman
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Property Analyst
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* card 4 */}
          <Grid sx={{}} item xs={12} sm={6} lg={3}>
            <Box
              sx={{
                borderRadius: "16px",
              }}
            >
              <Image
                src={image4}
                alt=""
                height={280}
                width="auto"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <Box sx={{ padding: "0 10px" }}>
                <Typography sx={{ fontSize: "24px" }}>
                  Wilson Septimus
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Property Analyst
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurAgents;
