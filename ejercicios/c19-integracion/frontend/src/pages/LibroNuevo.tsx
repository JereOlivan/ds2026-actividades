import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button, Container, Card, Alert, Spinner } from 'react-bootstrap';
import { libroSchema, type LibroInput, type LibroValidado } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import type { Autor, Libro } from '../types/libro';

interface Props {
    onAgregar?: (libro: Libro) => void;
}

export const LibroNuevo = ({ onAgregar }: Props) => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);

    // Obtenemos los autores disponibles de la API real
    const { data: autores, loading: loadingAutores } = useFetch<Autor[]>('/autores');

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LibroInput, unknown, LibroValidado>({
        resolver: zodResolver(libroSchema),
        defaultValues: {
            titulo: '',
            autorId: 0,
            precio: 0,
            imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
            destacado: false
        }
    });

    const onSubmit = async (data: LibroValidado) => {
        try {
            setSubmitting(true);
            setServerError(null);

            const nuevoLibro = await apiFetch<Libro>('/libros', {
                method: 'POST',
                body: JSON.stringify({
                    titulo: data.titulo,
                    precio: Number(data.precio),
                    imagen: data.imagen,
                    autorId: Number(data.autorId),
                    disponible: true
                })
            });

            if (onAgregar) {
                onAgregar(nuevoLibro);
            }
            navigate('/catalogo');
        } catch (error) {
            setServerError(error instanceof Error ? error.message : 'Error al crear el libro');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container className="py-4" style={{ maxWidth: 600 }}>
            <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                    <h2 className="mb-4 text-dark">Agregar Nuevo Libro</h2>

                    {serverError && (
                        <Alert variant="danger" onClose={() => setServerError(null)} dismissible>
                            {serverError}
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Clean Architecture"
                                {...register('titulo')}
                                isInvalid={!!errors.titulo}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.titulo?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Autor</Form.Label>
                            {loadingAutores ? (
                                <div className="d-flex align-items-center gap-2">
                                    <Spinner animation="border" size="sm" />
                                    <span className="text-muted small">Cargando autores...</span>
                                </div>
                            ) : (
                                <Form.Select
                                    {...register('autorId')}
                                    isInvalid={!!errors.autorId}
                                >
                                    <option value="">Seleccionar un autor...</option>
                                    {(autores ?? []).map((autor) => (
                                        <option key={autor.id} value={autor.id}>
                                            {autor.nombre} ({autor.nacionalidad ?? 'N/A'})
                                        </option>
                                    ))}
                                </Form.Select>
                            )}
                            <Form.Control.Feedback type="invalid">
                                {errors.autorId?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Precio ($)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ej: 5000"
                                {...register('precio')}
                                isInvalid={!!errors.precio}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.precio?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL de Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="https://..."
                                {...register('imagen')}
                                isInvalid={!!errors.imagen}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.imagen?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check
                                type="checkbox"
                                label="¿Es un libro destacado?"
                                {...register('destacado')}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={submitting}>
                            {submitting ? 'Guardando...' : 'Guardar Libro'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};