import { ResponseTrendingType } from "../types/responseType"
import { BASE_URL } from "./config"


// Inserire in questa funzione la chiamata all'API per ottenere i film in tendenza
/**
 * 1) Modificare MoviesType in modo che possa contenere un movie di Omdb API corretto
 * 2) Implementare la funzione getMovies in modo che faccia una chiamata fetch all'API di Omdb
 */
export const getMovies = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data: ResponseTrendingType = await response.json();
        console.log(JSON.stringify(data.results));
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}