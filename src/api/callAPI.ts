/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiUrl } from "./utils.ts";
import { CardType } from "@/types/cardType.ts";
import { MovieType, TvType, PersonType } from "@/types/tmdbTypes.ts";

const callAPI = async (endpoint: string, query?: string): Promise<any[]> => {
    try {
        const url = apiUrl(endpoint, query);

        const response = await fetch(url);

        const data = await response.json();
        return data.results;
    } catch (error: any) {
        console.error(`Error calling API at ${endpoint}:`, error.message);
        // Ritorno qualcosa all'utilizzatore per segnalare l'errore
        return [];
    }
};

export const getMovies = async (): Promise<CardType[]> => {
    try {
        const movies: MovieType[] = await callAPI("/trending/movie");
        return movies.map(movie => ({
            id: movie.id,
            image: movie.poster_path,
            title: movie.title,
            type: "movie"
        }));
    } catch (error: any) {
        console.error("Error fetching movies:", error.message);
        return [];
    }
};

export const getPeople = async (): Promise<CardType[]> => {
    try {
        const people: PersonType[] = await callAPI("/trending/person");
        return people.map(person => ({
            id: person.id,
            image: person.profile_path,
            title: person.name,
            type: "person"
        }));
    } catch (error: any) {
        console.error("Error fetching people:", error.message);
        return [];
    }
};

export const getTv = async (): Promise<CardType[]> => {
    try {
        const tvShows: TvType[] = await callAPI("/trending/tv");
        return tvShows.map(tv => ({
            id: tv.id,
            image: tv.poster_path,
            title: tv.name,
            type: "tv"
        }));
    } catch (error: any) {
        console.error("Error fetching TV shows:", error.message);
        return [];
    }
};

export const getCarouselImages = async (): Promise<string[]> => {
    try {
        const images: MovieType[] = await callAPI("/trending/movie");

        const baseUrl = "https://image.tmdb.org/t/p/";
        const size = "w1280";

        return images.map(image => `${baseUrl}${size}${image.backdrop_path}`);
    } catch (error: any) {
        console.error("Error fetching carousel images:", error.message);
        return [];
    }
};

export const getSearchResults = async (searchQuery?: string): Promise<CardType[]> => {
    const query = searchQuery?.trim() ?? "";

    if (!query) {
        console.error("Errore: searchQuery è vuoto.");
        return [];
    }

    try {
        const searchResults: any[] = await callAPI("/search/multi", query);
        return searchResults.map(result => {
            switch (result.media_type) {
                case "movie":
                    return { id: result.id, image: result.poster_path, title: result.title, type: "movie" };
                case "tv":
                    return { id: result.id, image: result.poster_path, title: result.name, type: "tv" };
                case "person":
                    return { id: result.id, image: result.profile_path, title: result.name, type: "person" };
                default:
                    return { id: result.id, image: null, title: result.name || result.title, type: "unknown" };
            }
        });
    } catch (error: any) {
        console.error("Error fetching search results:", error.message);
        return [];
    }
};

