const Nombre = "Jeremias Olivan"; 
const Edad = 21;
const Materia = "Desarrollo de Software";

const mensaje = `Me llamo ${Nombre},
tengo ${Edad} años y curso ${Materia}`;  
console.log(mensaje);

let contador = 0;
for (let i = 0; i < 3; i++) {
    contador = contador + 1;
}

console.log("El valor del contador es: " + contador);