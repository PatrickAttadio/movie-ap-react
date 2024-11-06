import { MovieType } from './movieTypes';

export type ResponseTrendingType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}