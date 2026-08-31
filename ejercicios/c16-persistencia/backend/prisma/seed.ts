import { prisma } from "../src/config/prisma";

const libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c", disponible: true },
  { titulo: "Clean Code", autor: "Robert C. Martin", precio: 38000, imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353", disponible: true },
  { titulo: "Rayuela", autor: "Julio Cortázar", precio: 7000, imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765", disponible: false }
];

const autores = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "Robert C. Martin", nacionalidad: "USA" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" }
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
  console.log("Datos sembrados correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });