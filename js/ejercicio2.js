// let alto = 12; 
// let ancho = 12.203004; 
// let altoPorAncho = alto * ancho; 
// console.log(altoPorAncho); 
// console.log(altoPorAncho.toFixed(2)); 

// //Ejercicio 3

// //et cadena1 = "CADENA1"; 
// let ena = cadena1.indexOf("ena"); 
// let last = cadena1.charAt(last.length - 1); 
// let minusculas = cadena1.toLocaleLowerCase(); 
// let camena1 = cadena1.replace("de", "me"); 
// //let cadena2 = "Cadena2"; 
// let lasDos = cadena1 + cadena2; 

// console.log(typeof(null)); 

// //Ejercicio 4 

// let cadena1 = "CADENA1";
// let cadena2;

// console.log("Tipo de cadena1:", typeof cadena1);
// console.log("Tipo de cadena2:", typeof cadena2);

// if (typeof cadena2 === "undefined") {
//     console.log("SIN DEFINIR");
// }

// let cliente = {
//     nombre: "PEPITO",
//     tel: "656666666"
// };

// cliente.direccion = "C/ Salud, 21";

// for (let propiedad in cliente) {
//     console.log(`${propiedad}: ${cliente[propiedad]}`);
// }

//ejercicio 5

let array1 = [1, 2, 3, 4];


array1.forEach(numero => {
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
            console.log("Número no identificado");
    }
});


array1.push(3);
console.log("Array después de añadir un 3 al final:", array1);


array1.splice(-3); 
console.log("Array después de quitar los últimos 3 elementos:", array1);