// NEI DETTAGLI MANCANO DEI DATI

export type MovieType = {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number; 
    video: boolean;
    vote_average: number;
}

export type PersonType = {
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string;
}

export type TvType = {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
}

export type ContentType = MovieType | PersonType | TvType;