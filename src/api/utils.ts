const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

// Array di risorse consentite
const validApiUrlResources = [ "/trending/movie", "/trending/tv", "/trending/person", "/search/multi" ];

// const validDetailUrlResources = [ "/movie", "/tv", "/person" ];

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