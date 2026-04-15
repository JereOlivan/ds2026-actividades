const numeros = [12, 45, 7, 89, 23, 56, 4, 31];

let sumaTotal = 0;
let mayor = 0;
let menor = 10000;

for (let i of numeros) {

    sumaTotal = sumaTotal + i;

    if (i > mayor) {
        mayor = i;
    }

    if (i < menor) {
        menor = i;
    }
}

const promedio = sumaTotal / numeros.length;

console.log(`Suma Total: ${sumaTotal}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número Mayor: ${mayor}`);
console.log(`Número Menor: ${menor}`);

const generarAsteriscos = (n) => {
    let i = 1;
    let asteriscos = "";
    for (let i = 0; i < n; i++){
        asteriscos = asteriscos + "*";
    }
    return asteriscos;
}

console.log(generarAsteriscos(3));
console.log(generarAsteriscos(10));
console.log(generarAsteriscos(7));