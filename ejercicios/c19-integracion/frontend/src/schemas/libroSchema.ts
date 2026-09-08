import { z } from 'zod';

export const libroSchema = z.object({
    titulo: z.string().trim().min(1, 'El título es obligatorio'),
    autorId: z.coerce.number().int().positive('Seleccioná un autor'),
    precio: z.coerce.number().int().positive('El precio debe ser mayor a 0'),
    imagen: z.string().trim().min(1, 'La URL de la imagen es obligatoria'),
    destacado: z.boolean().default(false),
});

export type LibroInput = z.input<typeof libroSchema>;
export type LibroValidado = z.output<typeof libroSchema>;
