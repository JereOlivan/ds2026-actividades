import { Request, Response } from 'express';
import * as libroService from '../services/libro.service';

export function getAll(req: Request, res: Response) {
    const destacado = req.query.destacado ? req.query.destacado === 'true' : undefined;
    res.json(libroService.findAll(destacado));
}

export function getById(req: Request, res: Response) {
    const libro = libroService.findById(Number(req.params.id));
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    return res.json(libro);
}

export function create(req: Request, res: Response) {
    const nuevoLibro = libroService.create(req.body);
    return res.status(201).json(nuevoLibro);
}

export function update(req: Request, res: Response) {
    const actualizado = libroService.update(Number(req.params.id), req.body);
    if (!actualizado) return res.status(404).json({ error: "Libro no encontrado" });
    return res.json(actualizado);
}

export function remove(req: Request, res: Response) {
    const ok = libroService.remove(Number(req.params.id));
    if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
    return res.status(204).send(); // 204 = sin body
}