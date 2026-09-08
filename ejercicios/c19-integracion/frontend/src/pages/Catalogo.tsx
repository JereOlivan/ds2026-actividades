import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export const Catalogo = () => {
    // Usamos el hook y le pasamos el endpoint de la API real
    const { data: libros, loading, error } = useFetch<Libro[]>('/libros');

    // UI basada en los 3 estados
    if (loading) {
        return (
            <Container className="my-5 text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2">Cargando catálogo...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-5">
                <Alert variant="danger">
                    <Alert.Heading>¡Ups! Hubo un problema</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-secondary border-bottom pb-2">Catálogo Completo</h2>
            <Row className="g-4 justify-content-center">
                {/* Usamos (libros ?? []) por si data llegara a ser null */}
                {(libros ?? []).map((libro) => (
                    <Col key={libro.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
                        <LibroCard libro={libro} />
                    </Col>
                ))}
                {libros?.length === 0 && <p className="text-center">No hay libros en el catálogo.</p>}
            </Row>
        </Container>
    );
};