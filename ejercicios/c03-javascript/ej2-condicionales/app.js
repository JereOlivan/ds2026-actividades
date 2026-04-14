const clasificarNota = (nota) => {
    if (nota < 4) return "Desaprobado";
    if (nota >= 4 && nota < 7) return "Aprobado";
    if (nota >= 7) return "Promocionado";
}

const diaDeLaSemana = (numero) => {
    switch (numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sabado (fin de semana)";
    case 7: return "Domingo (fin de semana)";
    default: return "Dia invalido";
    }
}


console.log(clasificarNota(1));
console.log(clasificarNota(4));
console.log(clasificarNota(8));
console.log(diaDeLaSemana(1));
console.log(diaDeLaSemana(2));
console.log(diaDeLaSemana(3));
console.log(diaDeLaSemana(4));
console.log(diaDeLaSemana(5));
console.log(diaDeLaSemana(6));
console.log(diaDeLaSemana(7));
console.log(diaDeLaSemana(10));