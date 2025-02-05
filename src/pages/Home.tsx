import "../App.css";
import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router";
import { CardCarousel } from "../components/CardCarousel";
import { getMovies } from "../api/callAPI";

const Home = () => {
  const location = useLocation();

  return (
    <Box bg="black" color="white" minH="100vh" p={6}>
      {location.pathname === "/" && <CardCarousel getData={getMovies} />}
      <Outlet />
    </Box>
  );
};

export default Home;
