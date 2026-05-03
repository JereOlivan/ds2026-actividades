"use strict";
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error-msg');
const listaUl = document.getElementById('lista-usuarios');
async function obtenerYMostrarUsuarios() {
    loadingDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    listaUl.innerHTML = '';
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error del servidor: ${respuesta.status}`);
        }
        const usuarios = await respuesta.json();
        usuarios.forEach(u => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${u.name}</strong> - ${u.email}`;
            listaUl.appendChild(li);
        });
    }
    catch (error) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = "Hubo un problema al cargar los usuarios. Reintentá más tarde.";
        console.error(error);
    }
    finally {
        loadingDiv.style.display = 'none';
    }
}
obtenerYMostrarUsuarios();
