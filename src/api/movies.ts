import { MovieType } from '../types/MovieTypes'

export const getMovies = () => {
    const movieMock: MovieType[] = [
        { 
            idMovie: 1,
            titleMovie: 'Fight Club',
            description: 'Un uomo che soffre di insonnia incontra un venditore di sapone carismatico che lo convince a ribellarsi contro il consumismo e il conformismo della società.'
        },
        {  
            idMovie: 2,
            titleMovie: 'Interstellar',
            description: 'Un gruppo di esploratori fa uso di un wormhole recentemente scoperto per superare le limitazioni dei viaggi spaziali umani e conquistare le immense distanze coinvolte in un viaggio interstellare.'
        },
        {  
            idMovie: 3,
            titleMovie: 'Il Padrino 2',
            description: 'Il Padrino - Parte II è un film del 1974 diretto da Francis Ford Coppola, seconda parte della trilogia de Il Padrino.'
        },
        {  
            idMovie: 4,
            titleMovie: 'Cars',
            description: 'Saetta McQueen, una macchina da corsa, si ritrova in un piccolo paese chiamato Radiator Springs, dove incontra la sua anima gemella e impara a guardare oltre le sue vittorie.'
        }
    ];

    return movieMock;
}