const calcularDescuento = (monto, medioPago) => {
    if (monto < 200) return monto;
    if (monto >= 200 && monto < 400){
        if (medioPago === "E") return monto * 0.7;
        if (medioPago === "D") return monto * 0.8;
        if (medioPago === "C") return monto * 0.9;
    }
    if (monto >= 400) return monto * 0.6;
};

let monto = 199; let medioPago = "D";
let mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${calcularDescuento(monto, medioPago)}`;
console.log(mensaje);
 
monto = 300; medioPago = "E";
mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${calcularDescuento(monto, medioPago)}`;
console.log(mensaje);
 
monto = 301; medioPago = "D";
mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${calcularDescuento(monto, medioPago)}`;
console.log(mensaje);
 
monto = 399; medioPago = "C";
mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${calcularDescuento(monto, medioPago)}`;
console.log(mensaje);
 
monto = 455; medioPago = "C";
mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${calcularDescuento(monto, medioPago)}`;
console.log(mensaje);
 