import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { LibroNuevo } from './pages/LibroNuevo';
import { LibroDetalle } from './pages/LibroDetalle'; // <-- Importamos la página real

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                
                {/* Formulario maqueta */}
                <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={() => console.log('Mock agregado')} />} />
                
                {/* Ahora usamos el componente real */}
                <Route path="/libros/:id" element={<LibroDetalle />} /> 
            </Routes>
        </Layout>
    );
}

export default App;