const input = document.getElementById('inputAltura');
const boton = document.getElementById('btnGenerar');
const display = document.getElementById('resultadoArbol');

const generarAsteriscos = (n) => {
    let i = 1;
    let asteriscos = "";
    for (let i = 0; i < n; i++){
        asteriscos = asteriscos + "*";
    }
    return asteriscos;
}
boton.addEventListener('click', () => {
    const altura = parseInt(input.value); 
    

    if (!input.value || altura < 1) {
        display.style.color = "red";
        display.innerText = "Error: Ingresá un número mayor a 0.";
        return; 
    }

    display.style.color = "black"; 
    let arbolCompleto = "";
    
    for (let i = 1; i <= altura; i++) {
        arbolCompleto += generarAsteriscos(i) + "\n";
    }

    display.innerText = arbolCompleto;
});