import { prisma } from "../config/prisma";
import { LibroConAutor, LibroDetalle } from "../types/libro.types";
import { LibroCreate } from "../validations/libro.validation";

export async function findAll(disponible?: boolean): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({
    where: disponible !== undefined ? { disponible } : undefined,
    include: { autor: true }
  });
}

export async function findById(id: number): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({
    where: { id },
    include: { autor: true, categorias: true }
  });
}

export async function create(datos: LibroCreate) {
  return prisma.libro.create({
    data: datos,
    include: { autor: true }
  });
}

export async function update(id: number, datos: Partial<LibroCreate>) {
  return prisma.libro.update({
    where: { id },
    data: datos,
    include: { autor: true }
  });
}

export async function remove(id: number): Promise<boolean> {
  await prisma.libro.delete({ where: { id } });
  return true;
}