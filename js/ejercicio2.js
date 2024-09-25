// // let alto = 12; 
// // let ancho = 12.203004; 
// // let altoPorAncho = alto * ancho; 
// // console.log(altoPorAncho); 
// // console.log(altoPorAncho.toFixed(2)); 

// // //Ejercicio 3

// // //et cadena1 = "CADENA1"; 
// // let ena = cadena1.indexOf("ena"); 
// // let last = cadena1.charAt(last.length - 1); 
// // let minusculas = cadena1.toLocaleLowerCase(); 
// // let camena1 = cadena1.replace("de", "me"); 
// // //let cadena2 = "Cadena2"; 
// // let lasDos = cadena1 + cadena2; 

// // console.log(typeof(null)); 

// // //Ejercicio 4 

// // let cadena1 = "CADENA1";
// // let cadena2;

// // console.log("Tipo de cadena1:", typeof cadena1);
// // console.log("Tipo de cadena2:", typeof cadena2);

// // if (typeof cadena2 === "undefined") {
// //     console.log("SIN DEFINIR");
// // }

// // let cliente = {
// //     nombre: "PEPITO",
// //     tel: "656666666"
// // };

// // cliente.direccion = "C/ Salud, 21";

// // for (let propiedad in cliente) {
// //     console.log(`${propiedad}: ${cliente[propiedad]}`);
// // }

// //ejercicio 5

// let array1 = [1, 2, 3, 4];


// array1.forEach(numero => {
//     switch (numero) {
//         case 1:
//             console.log("UNO");
//             break;
//         case 2:
//             console.log("DOS");
//             break;
//         case 3:
//             console.log("TRES");
//             break;
//         case 4:
//             console.log("CUATRO");
//             break;
//         default:
//             console.log("Número no identificado");
//     }
// });


// array1.push(3);
// console.log("Array después de añadir un 3 al final:", array1);


// array1.splice(-3); 
// console.log("Array después de quitar los últimos 3 elementos:", array1);

// // //Ejercicio 7
// // let pieza1 = {peso: 20}; 
// // let pieza2 = {peso: '20'}; 

// // console.log(pieza1[0] == pieza2[0]); 
// // console.log(pieza1[0] === pieza2[0]); 
// // let res = 0
// // console.log((pieza1[0] + pieza2[0]) ? res !=0 : pieza1[0] * pieza2[0]); 

// //Ejercicio 8

// function suma(param1, param2){
//     return param1 + param2; 
// }

// let res = suma(12,12); 

// (function(param1, param2){
//     return param1 + param2; 
// }(12,12)); 

// //Ejercicio 10 y 11

// let funciones = {}; 

// function colorVerde(){
//     console.log("VERDE"); 
// }

// funciones.colorVerde = colorVerde; 
// funciones.colorVerde(); 

// function colorRojo(){
//     funciones.colorVerde(); 
//     console.log("ROJO"); 
// }

// funciones.colorRojo = colorRojo; 

// funciones.colorRojo(); 

// //Ejercicio 13

// // try{
// //     alleeeert('hey'); 

// // }catch(error){
// //     throw new EvalError("Se ha producido un error", 'ejercicio2.js', 100); 
// // }

// //Ejercicio 15

// let nombre = '';  

// //window.alert('Introduzca el nombre: '); 
// //window.prompt('Introduzca el nombre: ', nombre); 
// //nombre = prompt('Introudzca el nombre'); 
// //onsole.log(nombre); 
// let confirm = ''; 
// //confirm = confirm('Confirmas?'); 
// //console.log(confirm); 

// //Ejercicio 16
// console.log(navigator.clipboard + ": navigator.clipboard");
// console.log(navigator.cookieEnabled + ": navigator.cookieEnabled");
// console.log(navigator.credentials + ": navigator.credentials");
// console.log(navigator.doNotTrack + ": navigator.doNotTrack");
// console.log(navigator.geolocation + ": navigator.geolocation");
// console.log(navigator.language + ": navigator.language");
// console.log(navigator.hardwareConcurrency + ": navigator.hardwareConcurrency");
// console.log(navigator.languages + ": navigator.languages");
// console.log(navigator.locks + ": navigator.locks");
// console.log(navigator.maxTouchPoints + ": navigator.maxTouchPoints");
// console.log(navigator.mediaCapabilities + ": navigator.mediaCapabilities");
// console.log(navigator.mediaDevices + ": navigator.mediaDevices");
// console.log(navigator.mediaSession + ": navigator.mediaSession");
// console.log(navigator.onLine + ": navigator.onLine");
// console.log(navigator.pdfViewerEnabled + ": navigator.pdfViewerEnabled");
// console.log(navigator.permissions + ": navigator.permissions");
// console.log(navigator.serviceWorker + ": navigator.serviceWorker");
// console.log(navigator.storage + ": navigator.storage");
// console.log(navigator.userActivation + ": navigator.userActivation");
// console.log(navigator.userAgent + ": navigator.userAgent");
// console.log(navigator.wakeLock + ": navigator.wakeLock");
// console.log(navigator.webdriver + ": navigator.webdriver");

  

// //Ejercicio 17




// //Ejercicio 18

// let method1 = document.getElementsByTagName('header'); 
// let method2 = document.getElementById('header'); 
// let method3 = document.querySelector('#header'); 

// console.log(method1); 
// console.log(method2); 
// console.log(method3); 

// //Ejercicio 19

// let element = document.createElement("p"); 
// element.innerHTML = "Este texto esta añadido dinámicamente"; 

// let bodyHtml = document.getElementsByTagName('body')[0]; 
// bodyHtml.appendChild(element); 

// //Ejercicio 20
// element.setAttribute("id", "parrafo1");
// console.log(element); 

// //ejercicio 21

// let element2 = document.createElement("p"); 
// element2.innerHTML = "parrafo1"; 

// element2.setAttribute("id", "p1");
// console.log(element2); 

// let button = document.createElement("button"); 
// button.setAttribute("id", "boton1");
// button.innerHTML = "Aplicar estilo al párrafo 1"; 

// button.onclick = function(){
//     if(!element2.classList.contains("parrafo")){
//         button.innerHTML = "Quitar estilo a párrafo 1"; 
//         button.classList.add("aplicado"); 
//         element2.classList.add("parrafo"); 
//     }else{
//         element2.classList.remove("parrafo"); 
//         button.innerHTML = "Aplicar estilo al párrafo 1"; 
//         button.classList.remove("aplicado"); 
//     }
// }

// document.body.appendChild(element2);
// document.body.appendChild(button);

//Ejercicio 22


    // const formulario = document.getElementById('formulario');
    // const nombre = document.getElementById('nombre');
    // const email = document.getElementById('email');
    // const provincias = document.getElementById('provincias');
    // const resultado = document.getElementById('resultado');
    // const errorMensaje = document.getElementById('errorMensaje'); 

    // formulario.addEventListener('submit', function(event){
    //     event.preventDefault(); 

    //     errorMensaje.innerHTML = '';
    //     resultado.innerHTML = '';

    //     let esValido = true;

    //     const valorNombre = nombre.value.trim();
    //             if (valorNombre.length > 20 || !valorNombre.startsWith('ANTONIO')) {
    //                 esValido = false;
    //             }else if (email.value.trim() === '' || provincias.value === '' ) {
    //                 esValido = false;
    //             }
    //             if (esValido) {
    //                 resultado.innerHTML = `<h3>Datos ingresados:</h3>
    //                     <p><strong>Nombre:</strong> ${valorNombre}</p>
    //                     <p><strong>Email:</strong> ${email.value}</p>
    //                     <p><strong>Provincia:</strong> ${provincias.options[provincias.selectedIndex].text}</p>`;
    //             } else {
    //                 errorMensaje.innerHTML += "Los datos del formulario no son correctos.";
    //             }

    // });

    // nombre.addEventListener('input', function() {
    //     errorMensaje.innerHTML = '';
    // });
    // email.addEventListener('input', function() {
    //     errorMensaje.innerHTML = '';
    // });
    // provincias.addEventListener('change', function() {
    //     errorMensaje.innerHTML = '';
    // });

    let request = new Request('http://192.168.1.135:3000/usuarios');
 
    let tableBody = document.querySelector('#clientesAxios2 tbody');

    fetch(request)
                .then(response => response.json())
                .then(data => {
                    let columnasTabla = '';
    
                    data.forEach(function(user) {
                        columnasTabla += '<tr>';
                        columnasTabla += '<td>' + user.id + '</td>';
                        columnasTabla += '<td>' + user.nombre + '</td>';
                        columnasTabla += '<td>' + user.apellidos + '</td>';
                        columnasTabla += '<td>' + user.email + '</td>';
                        columnasTabla += '</tr>';
                    });
                    
    
                    tableBody.innerHTML = columnasTabla;  
                }); 


let request2 = new Request('http://192.168.1.135:3000/clientes');

    fetch(request2)
                .then(response => response.json())
                .then(data => {
                    dibujarFetch(data[0].arrayUsuarios[0]);
                }); 

                function dibujarFetch(datos) {
                    let direcciones = document.getElementById("direcciones2");
                    document.getElementById("nombre2").innerHTML = datos.nombre + " " + datos.apellidos;
                    datos.direcciones.forEach((d) => {
                      let direccion = `<tr><td>${d.direccion}</td><td>${d.cpostal}</td></tr>`;
                      direcciones.innerHTML += direccion;
                    });
                  }

//AXIOS


    // Obtener datos de clientes
    let tableBody3 = document.querySelector('#clientesAxios tbody');
    
    axios.get('http://192.168.1.135:3000/usuarios')
        .then(response => {
            let data = response.data;
            let columnasTabla = '';
    
            data.forEach(function(user) {
                columnasTabla += '<tr>';
                columnasTabla += '<td>' + user.id + '</td>';
                columnasTabla += '<td>' + user.nombre + '</td>';
                columnasTabla += '<td>' + user.apellidos + '</td>';
                columnasTabla += '<td>' + user.email + '</td>';
                columnasTabla += '</tr>';
            });
    
            tableBody3.innerHTML = columnasTabla;
        })
      
        
        axios.get('http://192.168.1.135:3000/clientes')
        .then(response => {
            let data = response.data; 
            dibujar(data[0].arrayUsuarios[0]);
        })
        
        function dibujar(datos) {
          let direcciones = document.getElementById("direcciones");
          document.getElementById("nombre").innerHTML = datos.nombre + " " + datos.apellidos;
          datos.direcciones.forEach((d) => {
            let direccion = `<tr><td>${d.direccion}</td><td>${d.cpostal}</td></tr>`;
            direcciones.innerHTML += direccion;
          });
        }






