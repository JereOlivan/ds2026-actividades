import { Libro } from '../types/libro.types';

const libros: Libro[] = [
    { id: 1, titulo: "Introducción a los Algoritmos", autor: "Thomas H. Cormen", precio: 45000, imagen: "url", destacado: true },
    { id: 2, titulo: "Clean Code", autor: "Robert C. Martin", precio: 38000, imagen: "url", destacado: true }
];
let proximoId = 3;

export function findAll(destacado?: boolean): Libro[] {
    if (destacado === undefined) return libros;
    return libros.filter(l => l.destacado === destacado);
}

export function findById(id: number): Libro | undefined {
    return libros.find(l => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
    const nuevo: Libro = { id: proximoId++, ...datos };
    libros.push(nuevo);
    return nuevo;
}

export function update(id: number, datos: Partial<Libro>): Libro | undefined {
    const index = libros.findIndex(l => l.id === id);
    if (index === -1) return undefined;
    libros[index] = { ...libros[index], ...datos };
    return libros[index];
}

export function remove(id: number): boolean {
    const index = libros.findIndex(l => l.id === id);
    if (index === -1) return false;
    libros.splice(index, 1);
    return true;
}