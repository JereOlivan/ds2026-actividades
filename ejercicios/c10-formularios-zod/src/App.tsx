import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { LibroNuevo } from './pages/libroNuevo';
import type { Libro } from './types/libro';

const LIBROS_INICIALES: Libro[] = [
    { id: 1, titulo: "Introducción a los Algoritmos", autor: "Thomas H. Cormen", precio: 45000, imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 2, titulo: "Clean Code", autor: "Robert C. Martin", precio: 38000, imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 3, titulo: "Design Patterns", autor: "Erich Gamma", precio: 52000, imagen: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400", destacado: false }
];

const LibroDetalle = () => <h2 className="text-center mt-5">Detalle del Libro</h2>;

function App() {
    // El estado vive en el ancestro común
    const [libros, setLibros] = useState<Libro[]>(LIBROS_INICIALES);

    const agregarLibro = (nuevo: Omit<Libro, 'id' | 'imagen'>) => {
        const nuevoLibro: Libro = {
            ...nuevo,
            id: Date.now(), // Generamos ID temporal
            imagen: "https://placehold.co/300x400?text=Libro+Nuevo"
        };
        // Siempre devolvemos un array nuevo (inmutabilidad)
        setLibros([...libros, nuevoLibro]);
    };

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home libros={libros} />} />
                <Route path="/catalogo" element={<Catalogo libros={libros} />} />
                <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
                <Route path="/libros/:id" element={<LibroDetalle />} />
            </Routes>
        </Layout>
    );
}

export default App;