
const input = document.getElementById('inputAltura') as HTMLInputElement;
const boton = document.getElementById('btnGenerar') as HTMLButtonElement;
const display = document.getElementById('resultadoArbol') as HTMLPreElement;

const generarAsteriscos = (n: string): string => {
    let asteriscos: string = "";
    for (let i = 0; i < n; i++) {
        asteriscos += "*";
    }
    return asteriscos;
}

boton.addEventListener('click', () => {
    const altura: number = parseInt(input.value); 

    if (!input.value || altura < 1) {
        display.style.color = "red";
        display.innerText = "Error: Ingresá un número mayor a 0.";
        return; 
    }

    display.style.color = "black"; 
    let arbolCompleto: string = "";
    
    for (let i = 1; i <= altura; i++) {
        arbolCompleto += generarAsteriscos(i) + "\n";
    }

    display.innerText = arbolCompleto;
});