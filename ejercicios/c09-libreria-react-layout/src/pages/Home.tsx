import { Container, Row, Col } from 'react-bootstrap';
import { Banner } from '../components/Banner';
import { LibroCard } from '../components/LibroCard';
import type { Libro } from '../types/libro';

const LIBROS_MOCK: Libro[] = [
    { id: 1, titulo: "Introducción a los Algoritmos", autor: "Thomas H. Cormen", precio: 45000, imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 2, titulo: "Clean Code", autor: "Robert C. Martin", precio: 38000, imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400", destacado: true },
    { id: 3, titulo: "Design Patterns", autor: "Erich Gamma", precio: 52000, imagen: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400", destacado: false }
];

export const Home = () => {
    return (
        <>
            <Banner />
            <Container id="libros" className="my-5">
                <h2 className="mb-4 text-secondary border-bottom pb-2">Destacados</h2>
                <Row className="g-4 justify-content-center">
                    {LIBROS_MOCK.map((libro) => (
                        <Col key={libro.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
                            <LibroCard libro={libro} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};