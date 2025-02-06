import "../App.css";
import { Box, Spinner } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { CardCarousel } from "../components/CardCarousel";
import { getMovies } from "../api/callAPI";
import { CardType } from "@/types/cardType";

const Home = () => {
  const location = useLocation();
  const [data, setData] = useState<CardType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovies();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Box bg="black" color="white" minH="100vh" p={6}>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        location.pathname === "/" && <CardCarousel getData={async () => data || []} />
      )}
      <Outlet />
    </Box>
  );
};

export default Home;
