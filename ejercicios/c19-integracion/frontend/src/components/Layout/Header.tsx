import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { obtenerToken, borrarToken } from '../../services/sesion';

export const Header = () => {
    const navigate = useNavigate();
    const token = obtenerToken();

    const handleLogout = () => {
        borrarToken();
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">📚 UTN Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-2">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
                        <Nav.Link as={Link} to="/libros/nuevo" className="text-success fw-bold">
                            + Nuevo Libro
                        </Nav.Link>
                        {token ? (
                            <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-2">
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="btn btn-outline-info btn-sm text-info ms-2">
                                Iniciar Sesión
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};