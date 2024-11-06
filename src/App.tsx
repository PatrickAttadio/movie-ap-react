import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/MovieTypes'

function App() {
  const movieMock: MovieType[] = [
    { 
      idMovie: 1,
      titleMovie: 'Fight Club'
    },
    {  
      idMovie: 2,
      titleMovie: 'Interstellar'
    },
    {  
      idMovie: 3,
      titleMovie: 'Il Padrino 2'
    }
  ];

  console.log("Sono nel componente App");
  return (
    <>
      <h1>Movie List</h1>
      {
        movieMock.map((movie) => {
          return <MovieCard idMovie={movie.idMovie} titleMovie={movie.titleMovie} /> 
        })
      }
    </>
  )
}

export default App
