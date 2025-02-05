import "../App.css";
import { Box,  } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <Box bg="black" color="white" minH="100vh" p={6}>
      <Outlet />
    </Box>
  );
};

export default Home;
