

export interface Enemigo {
    id: number,
    nombre: string,
    drops: string,
    vida: number,
    es_jefe: boolean,
    dano: number | null,
    id_bioma: number | null
}