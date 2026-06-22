import { Container, Row, Col } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import type { Libro } from '../types/libro';

interface Props {
    libros: Libro[];
}

export const Catalogo = ({ libros }: Props) => {
    return (
        <Container className="my-5">
            <h2 className="mb-4 text-secondary border-bottom pb-2">Catálogo Completo</h2>
            <Row className="g-4 justify-content-center">
                {libros.map((libro) => (
                    <Col key={libro.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
                        <LibroCard libro={libro} />
                    </Col>
                ))}
                {libros.length === 0 && <p className="text-center">No hay libros en el catálogo.</p>}
            </Row>
        </Container>
    );
};