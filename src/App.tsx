import './App.css'
import { useEffect, useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'
import { SimpleGrid } from '@chakra-ui/react'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movies = await getMovies();
      setMovies(movies);
    }
    fetchMovie();
  },[]);

  console.log("Sono nel componente App");
  return (
    <>
      <h1>Movie List</h1>
      <SimpleGrid columns={{ base: 4, sm: 2, md: 3, lg: 4 }} gap={10}>
      {
        movies.length > 0 ? movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} /> 
        })
        : <h2>Caricamento in corso...</h2>
      }
      </SimpleGrid>
    </>
  )
}

export default App