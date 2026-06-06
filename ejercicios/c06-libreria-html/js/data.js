const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('resultadosLibros');
const errorDiv = document.getElementById('errorBusqueda');

async function buscarEnOpenLibrary() {
    const query = inputBusqueda.value.trim();
    
    if (query === "") {
        errorDiv.innerText = "Por favor, escribe algo para buscar.";
        return;
    }

    errorDiv.innerText = "";
    contenedor.innerHTML = '<div class="text-center">Buscando...</div>';

    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        const libros = data.docs.slice(0, 6); 

        contenedor.innerHTML = ""; 

        if (libros.length === 0) {
            errorDiv.innerText = "No se encontraron resultados.";
            return;
        }

        libros.forEach(libro => {
            const titulo = libro.title;
            const autor = libro.author_name ? libro.author_name[0] : "Autor desconocido";
            const imgId = libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : "https://via.placeholder.com/300x400";

            const cardHTML = `
                <div class="col-12 col-md-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${imgId}" class="card-img-top" alt="${titulo}" style="height: 300px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${titulo}</h5>
                            <p class="card-text text-muted">${autor}</p>
                            <a href="libro.html" class="btn btn-outline-primary mt-auto">Ver más</a>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += cardHTML;
        });

    } catch (error) {
        errorDiv.innerText = "Error al conectar con el servidor.";
        contenedor.innerHTML = "";
    }
}

btnBuscar.addEventListener('click', buscarEnOpenLibrary);