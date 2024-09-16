let cadena1 = "CADENA1";

let posicionENA = cadena1.indexOf("ENA");
console.log("La posición de 'ENA' en cadena1 es:", posicionENA);

let ultimoCaracter = cadena1.charAt(cadena1.length - 1);
console.log("El carácter de la última posición de cadena1 es:", ultimoCaracter);

let cadena1Minusculas = cadena1.toLowerCase();
console.log("El valor de cadena1 en minúsculas es:", cadena1Minusculas);

let cadena1Modificada = cadena1.replace("DE", "ME");
console.log("cadena1 con 'DE' sustituido por 'ME' es:", cadena1Modificada);

let cadena2 = "CADENA2";
let cadenaConcatenada = cadena1 + cadena2;
console.log("La concatenación de cadena1 y cadena2 es:", cadenaConcatenada);
