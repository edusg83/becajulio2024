//url = "http://127.0.0.1:3000/Ejercicios_JS/ejercicio.html?alfa=beta&delta=gammal";

// let parametros = "?alfa=beta&delta=gammal";
// let arrayParam = parametros.split('&');

// let alfa = arrayParam[0].split('=')[1];
// let delta = arrayParam[1].split('=')[1];

// document.write("Alfa: " + alfa  + " Delta: " + delta);

let params = new URLSearchParams(location.search);
let alfa = params.get('alfa');
let delta = params.get('delta');

document.write("Alfa: " + alfa  + " Delta: " + delta);