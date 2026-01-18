//Importamos el type de enemigos
import type { Enemigo } from "../types/enemigo";

//Variable para la api
const API_URL = 'http://localhost:3000';

export const getEnemigos = async (): Promise<Enemigo[]> => {
    try {
        const response = await fetch(`${API_URL}/enemigos`);

        if (!response.ok) {
            throw new Error('Error en la red al intentar obtener los enemigos');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la busqueda de enemigos: ', error);
        throw error;
    }
}