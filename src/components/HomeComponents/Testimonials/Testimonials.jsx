"use client";
import { Box, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import { Rating } from "react-simple-star-rating";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      description:
        "The service was excellent, and the team was very helpful throughout.",
      image: "https://i.ibb.co.com/dDY5HgT/review1.jpg",
      rating: 80,
      position: "CEO, Founder",
    },
    {
      name: "Jane Smith",
      description:
        "I had an amazing experience. Highly recommend to anyone looking for quality.",
      image: "https://i.ibb.co.com/4JLgwJ1/review2.jpg",
      rating: 100,
      position: "CEO, Founder",
    },
    {
      name: "Michael Brown",
      description:
        "Great service, but there’s still room for improvement in some areas.",
      image: "https://i.ibb.co.com/tQ7LFy6/review3.jpg",
      rating: 70,
      position: "CEO, Founder",
    },
  ];

  return (
    <Box
      sx={{
        margin: "80px 10px",
        backgroundColor: "#0F172A0D",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
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
            Our Testimonials
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "13px" } }}>
            Check out some of our Testimonials
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
            See All Testimonials
          </Typography>
          <ArrowRightAltIcon />
        </Box>
      </Box>
      {/* cards */}
      <Box>
        <Grid container spacing={3}>
          {testimonials?.map((item, idx) => (
            <Grid sx={{}} item xs={12} sm={12} lg={4} key={idx}>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "16px",
                  //   minHeight: "230px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Static Star Rating */}
                <Box sx={{ marginBottom: "20px" }}>
                  <Rating
                    readonly={true}
                    allowHover={false}
                    size={20}
                    initialValue={item.rating / 20}
                  />
                </Box>
                <Typography sx={{ fontSize: "18px", marginBottom: "40px" }}>
                  {item?.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <img
                    style={{
                      height: "70px",
                      width: "70px",
                      borderRadius: "50%",
                    }}
                    src={item?.image}
                    alt=""
                  />
                  <Box>
                    <Typography>{item?.name}</Typography>
                    <Typography>{item?.position}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
