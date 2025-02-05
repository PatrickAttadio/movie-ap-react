import "./App.css";
import Home from "./pages/Home";
import { CardContainer } from "./components/CardContainer";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieDetail from "./components/MovieDetail";
// import { getCarouselImages, getMovies, getPeople, getSearchResults, getTv } from "@/api/callAPI";
import { getMovies, getPeople, getTv } from "./api/callAPI";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/><Routes>
        <Route path="/" element={<Home/>}>
          <Route path="movies" element={<CardContainer getData={getMovies} />} />
          <Route path="people" element={<CardContainer getData={getPeople} />} />
          <Route path="tv" element={<CardContainer getData={getTv} />} />
          
          {/* <Route path="search/:searchQuery?" element={<CardContainer getData={getSearchResults} />} /> */}

          <Route path="detail/:contentType/:contentId" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
