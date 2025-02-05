import "../App.css";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { CardCarousel } from "../components/CardCarousel";
import { getMovies } from "../api/callAPI"; // Assuming you have an API function to get movies

const Home = () => {
  return (
    <Box bg="black" color="white" minH="100vh" p={6}>
      <CardCarousel getData={getMovies} />
      <Outlet />
    </Box>
  );
};

export default Home;
