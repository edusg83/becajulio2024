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

// //Ejercicio 7
// let pieza1 = {peso: 20}; 
// let pieza2 = {peso: '20'}; 

// console.log(pieza1[0] == pieza2[0]); 
// console.log(pieza1[0] === pieza2[0]); 
// let res = 0
// console.log((pieza1[0] + pieza2[0]) ? res !=0 : pieza1[0] * pieza2[0]); 

//Ejercicio 8

function suma(param1, param2){
    return param1 + param2; 
}

let res = suma(12,12); 

(function(param1, param2){
    return param1 + param2; 
}(12,12)); 

//Ejercicio 10 y 11

let funciones = {}; 

function colorVerde(){
    console.log("VERDE"); 
}

funciones.colorVerde = colorVerde; 
funciones.colorVerde(); 

function colorRojo(){
    funciones.colorVerde(); 
    console.log("ROJO"); 
}

funciones.colorRojo = colorRojo; 

funciones.colorRojo(); 

//Ejercicio 13

// try{
//     alleeeert('hey'); 

// }catch(error){
//     throw new EvalError("Se ha producido un error", 'ejercicio2.js', 100); 
// }

//Ejercicio 15

let nombre = '';  

//window.alert('Introduzca el nombre: '); 
//window.prompt('Introduzca el nombre: ', nombre); 
nombre = prompt('Introudzca el nombre'); 
console.log(nombre); 
let confirm = ''; 
confirm = confirm('Confirmas?'); 
console.log(confirm); 

//Ejercicio 16
console.log(navigator.clipboard + ": navigator.clipboard");
console.log(navigator.cookieEnabled + ": navigator.cookieEnabled");
console.log(navigator.credentials + ": navigator.credentials");
console.log(navigator.doNotTrack + ": navigator.doNotTrack");
console.log(navigator.geolocation + ": navigator.geolocation");
console.log(navigator.language + ": navigator.language");
console.log(navigator.hardwareConcurrency + ": navigator.hardwareConcurrency");
console.log(navigator.languages + ": navigator.languages");
console.log(navigator.locks + ": navigator.locks");
console.log(navigator.maxTouchPoints + ": navigator.maxTouchPoints");
console.log(navigator.mediaCapabilities + ": navigator.mediaCapabilities");
console.log(navigator.mediaDevices + ": navigator.mediaDevices");
console.log(navigator.mediaSession + ": navigator.mediaSession");
console.log(navigator.onLine + ": navigator.onLine");
console.log(navigator.pdfViewerEnabled + ": navigator.pdfViewerEnabled");
console.log(navigator.permissions + ": navigator.permissions");
console.log(navigator.serviceWorker + ": navigator.serviceWorker");
console.log(navigator.storage + ": navigator.storage");
console.log(navigator.userActivation + ": navigator.userActivation");
console.log(navigator.userAgent + ": navigator.userAgent");
console.log(navigator.wakeLock + ": navigator.wakeLock");
console.log(navigator.webdriver + ": navigator.webdriver");

  

//Ejercicio 17

location.pathname = 'alpha'; 


//Ejercicio 18

let method1 = document.getElementsByTagName('header'); 
let method2 = document.getElementById('header'); 
let method3 = document.querySelector('#header'); 

console.log(method1); 
console.log(method2); 
console.log(method3); 