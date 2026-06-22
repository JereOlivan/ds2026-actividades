import { Container, Row, Col } from 'react-bootstrap';
import { Banner } from '../components/Banner';
import { LibroCard } from '../components/LibroCard';
import type { Libro } from '../types/libro';

interface Props {
    libros: Libro[];
}

export const Home = ({ libros }: Props) => {
    const destacados = libros.filter(libro => libro.destacado);

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