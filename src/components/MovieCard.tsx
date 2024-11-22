import { MovieType } from '../types/movieTypes';

type MovieCardProps = {
    movie: MovieType;
};

/**
 * MovieCard è un componente che deve ricevere tre dati:
 * -idMovie: number un numero che rappresenta l'id del film
 * -title: string il titolo del film
 * -overview: string la descrizione del film
 * 
 * Le funzioni che rappresentano i componenti React in TypeScript ricevo un solo parametro, 
 * props, che è un oggetto che contiene tutte le proprietà passate al componente.
 */

export const MovieCard = ({ movie }: MovieCardProps) => {

    return (    
        <div style={{ backgroundColor: '#dddddd' }}>
            <h1>{movie.id}</h1>
            <p style={{ border: '1px solid #aaaaaa' }}>{movie.title}</p>
            <p style={{ border: '1px solid #aaaaaa' }}>{movie.overview}</p>
        </div>
    )
}