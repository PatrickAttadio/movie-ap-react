import './App.css'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'

function App() {
  const movieMock = getMovies();
  
  console.log("Sono nel componente App");
  return (
    <>
      <h1>Movie List</h1>
      {
        movieMock.map((movie) => {
          return <MovieCard key={movie.idMovie} movie={movie} /> 
        })
      }
    </>
  )
}

export default App
