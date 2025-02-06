const api_key = "9fb4f823233d65edde18832955f31106"
const baseUrl = "https://api.themoviedb.org/3"
const imageBaseUrl = "https://image.tmdb.org/t/p/w500"
// IMMAGINE DI DEFAULT SE NON TROVO L'IMMAGINE
const validApiUrlResources = [ "/trending/movie", "/trending/tv", "/trending/person", "/search/multi" ];

export const apiUrl = (apiResource: string, query?: string): string => {
    if (!validApiUrlResources.includes(apiResource)) {
        throw new Error("Risorsa API non valida");
    }
    if (apiResource === "/search/multi") {
        return `${baseUrl}${apiResource}?include_adult=false&language=en-US&page=1&query=${query}&api_key=${api_key}`;
    }
    return `${baseUrl}${apiResource}/day?language=en-US&api_key=${api_key}`;
};

export const detailUrl = (apiResource: string, id: number): string => {
    return `${baseUrl}${apiResource}/${id}?language=en-US&api_key=${api_key}`;
};

export const imageUrl = (imagePath: string): string => {
    return `${imageBaseUrl}${imagePath}`;
};