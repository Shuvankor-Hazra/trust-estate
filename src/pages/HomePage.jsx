import LatestBlogs from "@/components/HomeComponents/LatestBlogs/LatestBlogs";
import OurAgents from "@/components/HomeComponents/OurAgents/OurAgents";
import PopularCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import RecentProperties from "@/components/HomeComponents/RecentProperties/RecentProperties";
import Testimonials from "@/components/HomeComponents/Testimonials/Testimonials";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <PopularCategories />
      <RecentProperties />
      <OurAgents />
      <Testimonials />
      <LatestBlogs />
    </Box>
  );
};

export default HomePage;
