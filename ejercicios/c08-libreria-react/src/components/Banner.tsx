import React from 'react';
import { Alert, Container } from 'react-bootstrap';

export const Banner: React.FC = () => {
    return (
        <Container>
            <Alert variant="info" className="text-center py-4 my-3">
                <Alert.Heading>¡Semana del Estudiante de Sistemas! 💻</Alert.Heading>
                <p className="mb-0">
                    Descuentos exclusivos para la cursada de Desarrollo de Software.
                </p>
            </Alert>
        </Container>
    );
};