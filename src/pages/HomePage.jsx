import LatestBlogs from "@/components/HomeComponents/LatestBlogs/LatestBlogs";
import OurAgents from "@/components/HomeComponents/OurAgents/OurAgents";
import PopularCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import RecentProperties from "@/components/HomeComponents/RecentProperties/RecentProperties";
import Testimonials from "@/components/HomeComponents/Testimonials/Testimonials";
import Banner from "@/components/Shared/Banner/Banner";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Banner textUp={"Find your Ideal"} textDown={"Property for Your Family"} />
      <PopularCategories />
      <RecentProperties />
      <OurAgents />
      <Testimonials />
      <LatestBlogs />
    </Box>
  );
};
export default HomePage;