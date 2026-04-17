// 1. Capturamos los elementos nuevos
const inputProd = document.getElementById('inputProducto');
const btnAgregar = document.getElementById('btnAgregar');
const listaUl = document.getElementById('listaDinamica');
const contadorTxt = document.getElementById('contadorProductos');

let cantidad = 0;

const actualizarContador = () => {
    contadorTxt.innerText = `${cantidad} productos en la lista`;
};

btnAgregar.addEventListener('click', () => {
    const nombre = inputProd.value.trim(); 

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresá un nombre de producto.");
        return;
    }

    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = nombre + " ";

    const btnEliminar = document.createElement('button');
    btnEliminar.innerText = "Eliminar";
    btnEliminar.style.marginLeft = "10px";

    btnEliminar.onclick = () => {
        listaUl.removeChild(nuevoItem);
        cantidad--;
        actualizarContador();
    };
    nuevoItem.appendChild(btnEliminar);
    listaUl.appendChild(nuevoItem);

    inputProd.value = "";
    cantidad++;
    actualizarContador();
});