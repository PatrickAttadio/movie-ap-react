// https://developer.themoviedb.org/reference/trending-movies

export type MovieType = {
    id: number;
    adult: boolean;
    backdrop_path?: string;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path?: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type PersonType = {
    id: number;
    adult: boolean;
    name: string;
    original_name: string;
    media_type: string;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path?: string;
    known_for: MovieType[] | TvType[];
};

export type TvType = {
    id: number;
    adult: boolean;
    backdrop_path?: string;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path?: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
};