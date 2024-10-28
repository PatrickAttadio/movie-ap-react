import { MovieType } from "../types/movieTypes"

export const MovieCard = () => {
    const movieMock: MovieType = {
        id: 1,
        title: 'Inception'
    };
    return (
        <>
          <h1>{movieMock.title}</h1>
          <p>{movieMock.id}</p>
        </>
    )
}