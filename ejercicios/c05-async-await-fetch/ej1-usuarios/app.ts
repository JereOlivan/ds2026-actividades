interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }

        const usuarios: Usuario[] = await respuesta.json();
        return usuarios;

    } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
        return [];
    }
}

async function mostrarDatos() {
    const listaUsuarios = await obtenerUsuarios();

    if (listaUsuarios.length > 0) {
        console.log("--- Listado de Usuarios ---");
        listaUsuarios.forEach(u => {
            console.log(`Nombre: ${u.name} | Email: ${u.email}`);
        });
    } else {
        console.log("No se encontraron usuarios para mostrar.");
    }
}

mostrarDatos();