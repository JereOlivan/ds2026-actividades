import express from "express";

const app = express();
const PORT = 3000;

// Definimos la misma interfaz que espera el Frontend
interface Libro {
    id: number;
    titulo: string;
    autor: string;
    precio: number;
    imagen: string;
    destacado: boolean;
}

// Hardcodeamos los libros que antes teníamos en el public/libros.json
const libros: Libro[] = [
    { id: 1, titulo: "Introducción a los Algoritmos", autor: "Thomas H. Cormen", precio: 45000, imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 2, titulo: "Clean Code", autor: "Robert C. Martin", precio: 38000, imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 3, titulo: "Design Patterns", autor: "Erich Gamma", precio: 52000, imagen: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400", destacado: false }
];

// Endpoint de prueba
app.get("/", (_req, res) => {
    res.json({ mensaje: "API de la Librería" });
});

// Nuestro primer endpoint real
app.get("/libros", (_req, res) => {
    res.json(libros);
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});