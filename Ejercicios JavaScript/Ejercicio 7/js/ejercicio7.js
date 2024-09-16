let pieza1 = {
    peso: 20
};

let pieza2 = {
    peso: '20'
};

let esIgualConDobleIgual = pieza1.peso == pieza2.peso;
console.log("¿Las propiedades peso son iguales con ==?:", esIgualConDobleIgual);

let esIgualConTripleIgual = pieza1.peso === pieza2.peso;
console.log("¿Las propiedades peso son iguales con ===?:", esIgualConTripleIgual);

let resultado = (pieza1.peso == '20') ? (pieza1.peso + Number(pieza2.peso)) : (pieza1.peso * pieza2.peso);
console.log("Resultado de la operación ternaria:", resultado);
