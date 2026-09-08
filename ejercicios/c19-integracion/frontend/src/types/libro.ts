export interface Autor {
    id: number;
    nombre: string;
    nacionalidad?: string;
}

export interface Categoria {
    id: number;
    nombre: string;
}

export interface Libro {
    id: number;
    titulo: string;
    autorId: number;
    autor: Autor;
    precio: number;
    imagen: string;
    disponible?: boolean;
    destacado?: boolean;
    categorias?: Categoria[];
}