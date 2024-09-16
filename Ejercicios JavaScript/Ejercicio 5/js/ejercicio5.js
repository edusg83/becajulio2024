let array1 = [1, 2, 3, 4];

for (let i = 0; i < array1.length; i++) {
    switch (array1[i]) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
        default:
            console.log("Valor no reconocido");
    }
}

array1.push(3);
console.log("Array después de añadir un 3:", array1);

array1.splice(-3);
console.log("Array después de quitar los últimos 3 elementos:", array1);
