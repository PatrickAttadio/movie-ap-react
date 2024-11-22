import './App.css'
import { useEffect, useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    console.log("Sono nel componente App e sto per chiamare fetchMovie");
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
      {
        movies ? movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} /> 
        })
        : <h2>Caricamento in corso...</h2>
      }
    </>
  )
}

export default App
