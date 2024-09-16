let numeros = [1, 2, 3, 4];

for (let numero of numeros) {
    switch (numero) {
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
            console.log("default");
    }
}

numeros.push(3);
console.log("C)", numeros);

numeros.splice(-3);
console.log("D)", numeros);