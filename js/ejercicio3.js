let cadena1 = "CADENA1";

let posicionENA = cadena1.indexOf("ENA");
console.log("La posición de 'ENA' en cadena1 es:", posicionENA);

let ultimoCaracter = cadena1[cadena1.length - 1];
console.log("El último carácter de cadena1 es:", ultimoCaracter);

let cadena1Minusculas = cadena1.toLowerCase();
console.log("cadena1 en minúsculas:", cadena1Minusculas);

let cadena1Sustituida = cadena1.replace("DE", "ME");
console.log("cadena1 con 'DE' sustituido por 'ME':", cadena1Sustituida);

let cadena2 = "CADENA2";
let cadenaConcatenada = cadena2 + cadena1;
console.log("cadena2 concatenada con cadena1:", cadenaConcatenada);