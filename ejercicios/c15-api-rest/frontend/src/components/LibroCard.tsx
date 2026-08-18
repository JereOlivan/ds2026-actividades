import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Libro } from '../types/libro';

interface LibroCardProps {
    libro: Libro;
}

export const LibroCard: React.FC<LibroCardProps> = ({ libro }) => {
    const [like, setLike] = useState<boolean>(false);

    return (
        <Card style={{ width: '18rem', margin: '10px' }} className="shadow-sm">
            <Card.Img variant="top" src={libro.imagen} style={{ height: '250px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{libro.titulo}</Card.Title>
                    <Card.Text className="text-muted">{libro.autor}</Card.Text>
                    <Card.Text className="fw-bold text-success">${libro.precio}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/libros/${libro.id}`} className="btn btn-primary">
                        Ver más
                    </Link>
                    
                    <Button 
                        variant={like ? "danger" : "outline-danger"} 
                        onClick={() => setLike(!like)}
                    >
                        {like ? '❤️' : '🤍'}
                    </Button>
                    
                </div>
            </Card.Body>
        </Card>
    );
};