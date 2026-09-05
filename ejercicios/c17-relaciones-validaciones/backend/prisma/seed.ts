import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "Robert C. Martin", nacionalidad: "USA" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" }
];

const categorias = [
  { nombre: "Novela" },
  { nombre: "Ensayo" },
  { nombre: "Técnico" }
];

const libros = [
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    disponible: true,
    cats: ["Novela"]
  },
  {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    disponible: true,
    cats: ["Técnico"]
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    precio: 7000,
    imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    disponible: false,
    cats: ["Novela", "Ensayo"]
  }
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) }
      }
    });
  }

  console.log("Datos sembrados exitosamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });