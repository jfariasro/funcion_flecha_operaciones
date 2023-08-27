const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplicacion = (x, y) => x * y;
const division = (x, y) => x / y;

console.table({
    Suma: suma(10, 20),
    Resta: resta(20, 10),
    Multiplicacion: multiplicacion(10, 10),
    Division: division(10, 5)
})