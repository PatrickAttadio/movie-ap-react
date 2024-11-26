import { MovieType, TvType, PersonType } from "./elementTypes";

export type ResponseType = {
    results: (MovieType | PersonType | TvType)[];
    page: number;
    total_pages: number;
    total_results: number;
};