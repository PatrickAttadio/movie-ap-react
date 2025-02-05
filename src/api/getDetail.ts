import { detailUrl } from "./utils.ts";

export const getDetail = async (endpoint: string, id: number) => {
    try {
        const response = await fetch(detailUrl(endpoint, id));
        
        if (!response.ok) {
            // Gestione errore HTTP
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // Log dettagliato
        console.error(`Error fetching details from ${endpoint} with ID ${id}:`, error.message);

        // Ritorno valore di fallback
        return { success: false, message: "Failed to fetch data", data: null };
    }
};