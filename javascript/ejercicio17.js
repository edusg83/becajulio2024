document.write('<strong>' + 'Mi primera línea de texto con write' + '</strong>');

let url = location.href +"?alfa=beta&delta=gama";

let params = new URLSearchParams(location.search);

let alfa = params.get('alfa');
let delta = params.get('delta');

document.write(alfa + delta);