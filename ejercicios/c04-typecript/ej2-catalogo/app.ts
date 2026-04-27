
interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string; 
}


const biblioteca: Libro[] = [
    { isbn: "111", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true },
    { isbn: "222", titulo: "Rayuela", autor: "Cortázar", precio: 4500, disponible: false },
    { isbn: "333", titulo: "Ficciones", autor: "Borges", precio: 4800, disponible: true },
    { isbn: "444", titulo: "100 años de soledad", autor: "García Márquez", precio: 6000, disponible: true }
];

const buscarPorAutor = (autor: string): Libro[] => {
    return biblioteca.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
};

const librosDisponibles = (): Libro[] => {
    return biblioteca.filter(l => l.disponible);
};

const precioPromedio = (libros: Libro[]): number => {
    if (libros.length === 0) return 0;
    const suma = libros.reduce((acc, l) => acc + l.precio, 0);
    return suma / libros.length;
};

const renderizar = (libros: Libro[]): void => {
    const contenedor = document.getElementById('contenedorLibros') as HTMLDivElement;
    const stats = document.getElementById('stats') as HTMLDivElement;
    
    contenedor.innerHTML = ""; 
    
    libros.forEach(libro => {
        const card = document.createElement('div');
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p>Autor: ${libro.autor}</p>
            <p>Precio: $${libro.precio}</p>
            <p>${libro.disponible ? "✅ Disponible" : "❌ Sin stock"}</p>
        `;
        contenedor.appendChild(card);
    });

    stats.innerText = `Mostrando ${libros.length} libros | Precio Promedio: $${precioPromedio(libros).toFixed(2)}`;
};

document.getElementById('btnFiltrar')?.addEventListener('click', () => {
    const autor = (document.getElementById('inputAutor') as HTMLInputElement).value;
    renderizar(buscarPorAutor(autor));
});

document.getElementById('btnDisponibles')?.addEventListener('click', () => {
    renderizar(librosDisponibles());
});

document.getElementById('btnTodos')?.addEventListener('click', () => {
    renderizar(biblioteca);
});

renderizar(biblioteca);

const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar?.addEventListener('click', () => {
    const input = document.getElementById('inputAutor') as HTMLInputElement;
    const autorBuscado = input.value;
    
    renderizar(buscarPorAutor(autorBuscado));
});

const btnDisponibles = document.getElementById('btnDisponibles');
btnDisponibles?.addEventListener('click', () => {
    renderizar(librosDisponibles());
});


const btnTodos = document.getElementById('btnTodos');
btnTodos?.addEventListener('click', () => {
    renderizar(biblioteca); 
});

renderizar(biblioteca);