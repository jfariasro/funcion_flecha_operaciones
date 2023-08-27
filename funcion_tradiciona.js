function Suma(x, y) {
    return x + y;
}

function Resta(x, y) {
    return x - y;
}

function Multiplicacion(x, y) {
    return x * y;
}

function Division(x, y) {
    return x / y;
}

console.table({
    Suma: Suma(10, 20),
    Resta: Resta(20, 10),
    Mulplicacion: Multiplicacion(10, 10),
    Division: Division(10, 5)
})