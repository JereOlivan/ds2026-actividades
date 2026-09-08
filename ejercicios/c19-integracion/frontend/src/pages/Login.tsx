import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { loginSchema, type LoginFormData } from '../schemas/loginSchema';
import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';

interface Usuario {
    id: number;
    email: string;
    nombre: string;
    rol: 'ADMIN' | 'CLIENTE';
}

interface SesionResponse {
    token: string;
    usuario: Usuario;
}

export const Login = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (datos: LoginFormData) => {
        try {
            setLoading(true);
            setServerError(null);

            const sesion = await apiFetch<SesionResponse>('/auth/login', {
                method: 'POST',
                body: JSON.stringify(datos)
            });

            guardarToken(sesion.token);
            navigate('/catalogo');
        } catch (error) {
            setServerError(error instanceof Error ? error.message : 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="py-5" style={{ maxWidth: 480 }}>
            <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                    <h2 className="mb-4 text-center text-dark">Iniciar Sesión</h2>

                    {serverError && (
                        <Alert variant="danger" onClose={() => setServerError(null)} dismissible>
                            {serverError}
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="nombre@correo.com"
                                {...register('email')}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="••••••••"
                                {...register('password')}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                        </Button>
                    </Form>

                    <div className="mt-3 p-3 bg-light rounded text-muted small">
                        <strong>Usuarios de prueba (Seed):</strong>
                        <div className="mt-1">
                            <code>admin@libreria.test</code> / <code>Admin1234</code> (ADMIN)
                        </div>
                        <div>
                            <code>cliente@libreria.test</code> / <code>Cliente1234</code> (CLIENTE)
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};
