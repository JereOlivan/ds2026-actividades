"use strict";
const inputBuscador = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('resultadosLibros');
const errorMensaje = document.getElementById('errorBusqueda');
const loader = document.getElementById('loading');
// 2. Función de búsqueda
async function buscarLibros(query) {
    // Feedback visual
    loader.style.display = 'block';
    contenedor.innerHTML = '';
    errorMensaje.innerText = '';
    try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
        const respuesta = await fetch(url);
        if (!respuesta.ok)
            throw new Error("Error en la conexión");
        const datos = await respuesta.json();
        const libros = datos.docs.slice(0, 10); // Solo los primeros 10
        if (libros.length === 0) {
            errorMensaje.innerText = "No se encontraron libros.";
            return;
        }
        // 3. Renderizado
        libros.forEach(libro => {
            const card = document.createElement('div');
            card.className = 'card-libro';
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.margin = "10px 0";
            // Validamos campos opcionales con el operador || o validación simple
            const autor = libro.author_name ? libro.author_name[0] : "Autor desconocido";
            const anio = libro.first_publish_year || "Año no disponible";
            card.innerHTML = `
                <h3>${libro.title}</h3>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Año:</strong> ${anio}</p>
            `;
            contenedor.appendChild(card);
        });
    }
    catch (error) {
        errorMensaje.innerText = "Error al conectar con la API.";
    }
    finally {
        loader.style.display = 'none';
    }
}
// 4. Evento del botón con validación de input vacío
btnBuscar.addEventListener('click', () => {
    const texto = inputBuscador.value.trim();
    if (texto === "") {
        errorMensaje.innerText = "Por favor, ingresá un término de búsqueda.";
        return;
    }
    buscarLibros(texto);
});
