import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button, Container } from 'react-bootstrap';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import type { Libro } from '../types/libro';

interface Props {
    onAgregar: (libro: Omit<Libro, 'id' | 'imagen'>) => void;
}

export const LibroNuevo = ({ onAgregar }: Props) => {
    const navigate = useNavigate();

    // Al quitar <LibroValidado> de aquí, React Hook Form infiere los tipos 
    // automáticamente desde el schema de Zod, evitando conflictos de tipado.
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(libroSchema),
        defaultValues: {
            titulo: '',
            autor: '',
            precio: '' as any, // Se usa '' para que el input numérico empiece vacío y limpio
            destacado: false
        }
    });

    const onSubmit = (data: LibroValidado) => {
        // En este punto, 'data' ya viene completamente validado y con los tipos correctos
        onAgregar(data);
        navigate('/catalogo'); 
    };

    return (
        <Container className="py-4" style={{ maxWidth: 600 }}>
            <h2 className="mb-4 text-dark">Agregar Nuevo Libro</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control 
                        {...register('titulo')} 
                        isInvalid={!!errors.titulo} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.titulo?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control 
                        {...register('autor')} 
                        isInvalid={!!errors.autor} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.autor?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio ($)</Form.Label>
                    <Form.Control 
                        type="number" 
                        {...register('precio')} 
                        isInvalid={!!errors.precio} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.precio?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Check 
                        type="checkbox"
                        label="¿Es un libro destacado?"
                        {...register('destacado')}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Guardar Libro
                </Button>
            </Form>
        </Container>
    );
};