import './App.css'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes'

function App() {
  let movies: MovieType[] = [];
  const movieMock = async () => {
    movies = await getMovies();
  }

  movieMock();
  
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
