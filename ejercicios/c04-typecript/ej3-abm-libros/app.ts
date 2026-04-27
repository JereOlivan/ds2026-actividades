interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
}


let catalogo: Libro[] = [
    { isbn: "AUTO-1", titulo: "Fundación", autor: "Asimov", precio: 3500, disponible: true },
    { isbn: "AUTO-2", titulo: "1984", autor: "Orwell", precio: 2800, disponible: true }
];


const agregarLibro = (libro: Libro): void => {
    catalogo.push(libro);
    renderizar(catalogo);
};

const eliminarLibro = (isbn: string): void => {
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
};

const validarFormulario = (): Libro | null => {
    const txtTitulo = (document.getElementById('titulo') as HTMLInputElement).value;
    const txtAutor = (document.getElementById('autor') as HTMLInputElement).value;
    const numPrecio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
    const chkDisp = (document.getElementById('disponible') as HTMLInputElement).checked;
    const errorDisplay = document.getElementById('errorForm') as HTMLParagraphElement;

    if (!txtTitulo || !txtAutor || isNaN(numPrecio) || numPrecio <= 0) {
        errorDisplay.innerText = "Error: Todos los campos son obligatorios y el precio debe ser > 0.";
        return null;
    }

    errorDisplay.innerText = ""; 
    return {
        isbn: "AUTO-" + Date.now(),
        titulo: txtTitulo,
        autor: txtAutor,
        precio: numPrecio,
        disponible: chkDisp
    };
};


const renderizar = (libros: Libro[]): void => {
    const contenedor = document.getElementById('contenedorLibros') as HTMLDivElement;
    contenedor.innerHTML = "";

    libros.forEach(l => {
        const div = document.createElement('div');
        div.className = "card-libro";
        div.style.border = "1px solid #000";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
            <h3>${l.titulo}</h3>
            <p>Autor: ${l.autor} | Precio: $${l.precio}</p>
        `;

        const btnBorrar = document.createElement('button');
        btnBorrar.innerText = "Eliminar";
        btnBorrar.onclick = () => eliminarLibro(l.isbn);

        div.appendChild(btnBorrar);
        contenedor.appendChild(div);
    });
};


document.getElementById('btnAgregarLibro')?.addEventListener('click', () => {
    const nuevoLibro = validarFormulario();
    if (nuevoLibro) {
        agregarLibro(nuevoLibro);
        (document.getElementById('titulo') as HTMLInputElement).value = "";
        (document.getElementById('autor') as HTMLInputElement).value = "";
        (document.getElementById('precio') as HTMLInputElement).value = "";
        (document.getElementById('disponible') as HTMLInputElement).checked = false;
    }
});


renderizar(catalogo);