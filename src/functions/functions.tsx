
import { CardType } from "../types/cardType";
// Funzione per visualizzare l'immagine, passo il percoso dell'immagine
export const srcImage = (element: CardType, path: string | undefined) => {
    if (path) 
        return `https://image.tmdb.org/t/p/w500${path}`;
    return element.media_type === 'person' ? '/movie-app-react/images/person_fallback.png' : '/movie-app-react/images/movie_tv_fallback.png';
};

//Funzione per settare l'url di ricerca quando clicco sul pulsante learnMore
export const learnMore = (element: CardType) : string => {
    let searchQuery = element.name || "";
    if (element.media_type === 'movie')
        searchQuery += " (movie)";
    else if (element.media_type === 'tv')
        searchQuery += " (TV series)";
    const encodedQuery = encodeURIComponent(searchQuery);
    return `https://www.google.com/search?q=${encodedQuery}`;
}
