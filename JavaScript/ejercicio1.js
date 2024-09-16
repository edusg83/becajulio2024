/*console.info("Hola info");
console.warn("Hola warning");
console.error("Hola error");
console.log("Hola log");
console.time();
*/

/*
let alto = new Number(12);
let ancho = new Number(12.203004);
let altoPorAncho = alto * ancho;

console.log(altoPorAncho);
console.log(altoPorAncho.toFixed(2));
*/

/*
let cadena1 ="CADENA1";
let cadena2= "CADENA2";
console.log(cadena1.indexOf("ENA"));
console.log(cadena1.charAt(cadena1.length-1));
//console.log(cadena1.lastIndexOf());
console.log(cadena1.toLowerCase());
console.log(cadena1.replace("DE", "ME"));

console.log(cadena1 +(" ")+ cadena2);
*/

/*let cadena1 = "CADENA1";
let cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);

if(typeof cadena2 ==="undefined"){
    console.log("Sin definir");
}

let cliente1 = {
    nombre: "Super Cliente",
    tel: "666666666"
};

cliente1.direccion = "Desengaño 21";

console.log(cliente1.nombre, cliente1.tel, cliente1.direccion);*/

array1 = [1, 2, 3, 4];
for (let i = 0; i < array1.length; i++) {
    let numero = array1[i];

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
            console.log("No se sabe el número");
    }
}
array1 = array1.concat(3);
console.log(array1);

array1.length -= 3;
console.log(array1);

for (let numero of array1) {
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
            console.log("No se sabe el número");
    }

}