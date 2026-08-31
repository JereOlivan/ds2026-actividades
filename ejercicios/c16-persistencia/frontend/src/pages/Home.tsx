import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Banner } from '../components/Banner';
import { LibroCard } from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export const Home = () => {
    const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json');

    if (loading) {
        return (
            <>
                <Banner />
                <Container className="my-5 text-center">
                    <Spinner animation="border" variant="primary" />
                </Container>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Banner />
                <Container className="my-5">
                    <Alert variant="danger">{error}</Alert>
                </Container>
            </>
        );
    }

    const destacados = (libros ?? []).filter(libro => libro.destacado);

    return (
        <>
            <Banner />
            <Container id="libros" className="my-5">
                <h2 className="mb-4 text-secondary border-bottom pb-2">Destacados</h2>
                <Row className="g-4 justify-content-center">
                    {destacados.map((libro) => (
                        <Col key={libro.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
                            <LibroCard libro={libro} />
                        </Col>
                    ))}
                    {destacados.length === 0 && <p className="text-center">No hay libros destacados.</p>}
                </Row>
            </Container>
        </>
    );
};