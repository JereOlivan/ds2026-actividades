"use strict";
const biblioteca = [
    { isbn: "111", titulo: "El Aleph", autor: "Borges", precio: 5000, disponible: true },
    { isbn: "222", titulo: "Rayuela", autor: "Cortázar", precio: 4500, disponible: false },
    { isbn: "333", titulo: "Ficciones", autor: "Borges", precio: 4800, disponible: true },
    { isbn: "444", titulo: "100 años de soledad", autor: "García Márquez", precio: 6000, disponible: true }
];
const buscarPorAutor = (autor) => {
    return biblioteca.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
};
const librosDisponibles = () => {
    return biblioteca.filter(l => l.disponible);
};
const precioPromedio = (libros) => {
    if (libros.length === 0)
        return 0;
    const suma = libros.reduce((acc, l) => acc + l.precio, 0);
    return suma / libros.length;
};
const renderizar = (libros) => {
    const contenedor = document.getElementById('contenedorLibros');
    const stats = document.getElementById('stats');
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
    const autor = document.getElementById('inputAutor').value;
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
    const input = document.getElementById('inputAutor');
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
