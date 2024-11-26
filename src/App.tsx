import './App.css'
import { useEffect, useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'
import { SimpleGrid, VStack, Heading, Button } from '@chakra-ui/react'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movies = await getMovies();
      setMovies(movies);
    }
    fetchMovie();
  },[]);

  const open = () => {
    console.log("Button clicked");
  };

  return (
    <VStack gap={10} maxW="100vw" p={10}>
      {
      <>
        <Button variant={'outline'} onClick={open}>Dettaglio</Button>
        <Heading as={"h1"}>Trending</Heading>
        <SimpleGrid columns={4} gap={5}>
          {
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} /> 
            })
          }
        </SimpleGrid>
        {/* <MovieDetail isOpen={open} onClose={onclose} /> */}
      </>
      }
    </VStack>
  )
}

export default App