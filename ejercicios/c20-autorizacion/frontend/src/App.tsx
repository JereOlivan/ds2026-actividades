import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Libros from './pages/LibrosCatalogo';
import Login from './pages/Login';
import LibroNuevo from './pages/LibroNuevo';
import { Routes, Route } from 'react-router-dom';
import { BusquedaProvider } from './context/BusquedaContext'; 
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { SinPermiso } from './pages/SinPermiso';

function App() {
  
  return (
    <AuthProvider>
    <BusquedaProvider>    
      <Layout>
        <Routes>
          {/* públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Libros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sin-permiso" element={<SinPermiso />} />

          {/* solo ADMIN: PrivateRoute decide, LibroNuevo se renderiza en su <Outlet /> */}
          <Route element={<PrivateRoute rol="ADMIN" />}>
            <Route path="/libros/nuevo" element={<LibroNuevo />} />
          </Route>
        </Routes>
      </Layout>
    </BusquedaProvider>
    </AuthProvider>
  );
}

export default App;
