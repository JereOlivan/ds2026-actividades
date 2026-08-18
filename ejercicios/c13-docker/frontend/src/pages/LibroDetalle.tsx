import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Card, Button } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export const LibroDetalle = () => {
    // 1. Obtenemos el ID de la URL (ej: /libros/2)
    const { id } = useParams<{ id: string }>();
    
    // 2. Traemos todos los libros (simulando una API)
    const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json');

    if (loading) {
        return (
            <Container className="my-5 text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2 text-dark">Cargando detalles...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    // 3. Buscamos el libro específico cuyo ID coincida con el de la URL
    const libro = (libros ?? []).find(l => l.id === Number(id));

    if (!libro) {
        return (
            <Container className="my-5 text-center">
                <h2 className="text-danger">Libro no encontrado</h2>
                <Link to="/catalogo" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </Container>
        );
    }

    // 4. Renderizamos una vista detallada del libro
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card className="shadow-lg border-0 overflow-hidden">
                        <Row className="g-0">
                            {/* Columna de la Imagen */}
                            <Col md={5} className="bg-light">
                                <Card.Img 
                                    src={libro.imagen} 
                                    alt={libro.titulo} 
                                    style={{ height: '100%', objectFit: 'cover', minHeight: '400px' }} 
                                />
                            </Col>
                            
                            {/* Columna de la Información */}
                            <Col md={7}>
                                <Card.Body className="d-flex flex-column h-100 p-4 p-md-5">
                                    {/* Le ponemos text-dark para evitar que el CSS global lo ponga blanco */}
                                    <Card.Title as="h2" className="text-dark fw-bold mb-2">
                                        {libro.titulo}
                                    </Card.Title>
                                    
                                    <Card.Subtitle className="mb-4 text-muted fs-5">
                                        De {libro.autor}
                                    </Card.Subtitle>
                                    
                                    {libro.destacado && (
                                        <span className="badge bg-warning text-dark align-self-start mb-3">
                                            ⭐ Libro Destacado
                                        </span>
                                    )}

                                    <Card.Text className="fs-3 fw-bold text-success mb-4 mt-auto">
                                        ${libro.precio.toLocaleString('es-AR')}
                                    </Card.Text>
                                    
                                    <div>
                                        <Button variant="primary" size="lg" className="w-100 mb-2">
                                            Comprar ahora
                                        </Button>
                                        <Link to="/catalogo" className="btn btn-outline-secondary w-100">
                                            Volver al catálogo
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};