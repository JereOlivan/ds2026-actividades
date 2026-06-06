import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';

const Catalogo = () => <h2 className="text-center mt-5">Página de Catálogo Completo</h2>;
const LibroDetalle = () => <h2 className="text-center mt-5">Detalle del Libro</h2>;

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/libros/:id" element={<LibroDetalle />} />
            </Routes>
        </Layout>
    );
}

export default App;